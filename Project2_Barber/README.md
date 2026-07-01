# Barber

A responsive landing page for a **barbershop**, coded from a Figma layout. Part of the
[ProjectFigma](../README.md) collection and the second project in the series — it adds
WebP image optimization and minified assets on top of the plain HTML/CSS approach.

**Live demo:** https://pavloseniv.github.io/ProjectFigma/Project2_Barber/

## Overview

A single-page site for a barbershop brand ("Barber"), with a hero, brand story, service
list and a photo gallery.

### Sections

| Anchor | Section | Content |
|--------|---------|---------|
| `#Home` | Hero | Headline *"Hairstylel Reflects The Personality Inside You"* (sic — see notes) and a "Get Started" button |
| `#History` | Our History | Brand story text with an image and a "Learn more" button |
| `#Service` | Services We Provide | Three cards — **Hair Cut**, **Beard Cut**, **Facial Pack** |
| `#Gallery` | Our Gallery | A six-image gallery with a hover filter and a "View All" button |
| footer | Footer | Logo, tagline and Facebook / Twitter / Google social links |

## Tech stack

- **HTML5** — single `index.html` (served minified)
- **[Bootstrap 5.0.1](https://getbootstrap.com/)** — grid, navbar, cards and buttons (vendored under `bootstrap-5.0.1-dist/`)
- **Custom CSS** — written in `css/style.css`; a minified copy `css/style.min.css` sits next to it and is the one `index.html` actually loads
- **WebP images** — every raster image ships as both `.png`/`.jpg` and `.webp`, served via `<picture>` + `<source>` so the browser natively picks the format it supports (no JavaScript required)- **JavaScript** — `js/script.js` (+ minified `js/script.min.js`) holds a WebP feature-detection helper and a jQuery gallery-hover handler. Note: `index.html` currently loads **no** custom script (only `bootstrap.bundle.js`), so this code does not run — see [Notes](#notes--possible-improvements).
- **SVG assets** — icons and the logo are embedded via `<object>`
- **Google Fonts** — [Catamaran](https://fonts.google.com/specimen/Catamaran)

## Project structure

```
Project2_Barber/
├── index.html
├── css/
│   ├── style.css        # source styles
│   └── style.min.css    # minified (loaded by index.html)
├── js/
│   ├── script.js        # WebP feature detection + gallery hover
│   └── script.min.js    # minified
├── img/                 # PNG/JPG + matching WebP, grouped by section
│   ├── Header/  Home/  History/
│   ├── Services/  Gallery/  Footer/
│   └── Background_Image/
├── bootstrap-5.0.1-dist/
│   ├── css/
│   └── js/
└── README.md
```

## Running locally

Static page — no build step required to view it:

```bash
# from the repository root
open Project2_Barber/index.html   # macOS

# or serve it
python3 -m http.server 8000       # then visit http://localhost:8000/Project2_Barber/
```

## Notes & possible improvements

- **No custom script is loaded.** The only `<script>` in `index.html` is `bootstrap.bundle.js`, so neither the WebP feature-detection nor the jQuery `$("figure")` hover handler in `js/script.js` ever runs. (WebP still works — `<picture>`/`<source>` handles format selection natively.) To enable the script, add `<script src="js/script.min.js"></script>`; the `$("figure")` handler also needs jQuery, or a vanilla-JS rewrite.
- No `.webp` / `.no-webp` rules exist in `css/style.css`, so the body-class mechanism in the script would have no styling effect even if it ran.
- The hero headline reads **"Hairstylel"** — a typo for "Hairstyle" — worth fixing in `index.html`.
- The `*.min.css` / `*.min.js` files are pre-minified copies of the sources, but no build config or task runner is included in the repo — there's nothing here that regenerates them, so any change has to be made in both the source and the minified file by hand.
- `index.html` is committed in minified form, which makes it harder to read/diff — keeping a readable source alongside the built output would help.

## Author

**Pavlo Seniv** — [@pavloseniv](https://github.com/pavloseniv)

---

# Barber (укр.)

Адаптивний лендинг для **барбершопу**, зверстаний за макетом із Figma. Входить до збірки
[ProjectFigma](../README.md) і є другим проектом серії — тут поверх звичайного HTML/CSS
додано оптимізацію зображень у WebP та мініфіковані ресурси.

**Демо:** https://pavloseniv.github.io/ProjectFigma/Project2_Barber/

## Про проект

Односторінковий сайт для бренду барбершопу («Barber»): hero-блок, історія бренду, перелік
послуг і фотогалерея.

### Секції

| Якір | Секція | Вміст |
|------|--------|-------|
| `#Home` | Hero | Заголовок *«Hairstylel Reflects The Personality Inside You»* (sic — див. нотатки) і кнопка «Get Started» |
| `#History` | Our History | Текст про бренд із зображенням і кнопкою «Learn more» |
| `#Service` | Services We Provide | Три картки — **Hair Cut**, **Beard Cut**, **Facial Pack** |
| `#Gallery` | Our Gallery | Галерея з шести фото з hover-фільтром і кнопкою «View All» |
| footer | Footer | Логотип, слоган і соцпосилання Facebook / Twitter / Google |

## Стек

- **HTML5** — один `index.html` (у мініфікованому вигляді)
- **[Bootstrap 5.0.1](https://getbootstrap.com/)** — сітка, навбар, картки, кнопки (лежить у `bootstrap-5.0.1-dist/`)
- **Власний CSS** — пишеться у `css/style.css`; поруч лежить мініфікована копія `css/style.min.css`, і саме її підключає `index.html`
- **WebP-зображення** — кожне растрове зображення є і у `.png`/`.jpg`, і у `.webp`; віддається через `<picture>` + `<source>`, тож браузер сам обирає підтримуваний формат (JavaScript не потрібен)- **JavaScript** — `js/script.js` (+ мініфікований `js/script.min.js`) містить хелпер визначення підтримки WebP і jQuery-обробник hover для галереї. Увага: `index.html` наразі **не** підключає жодного власного скрипта (лише `bootstrap.bundle.js`), тож цей код не виконується — див. [Нотатки](#нотатки-та-можливі-покращення).
- **SVG** — іконки та логотип вбудовані через `<object>`
- **Google Fonts** — [Catamaran](https://fonts.google.com/specimen/Catamaran)

## Структура

```
Project2_Barber/
├── index.html
├── css/style.css / style.min.css
├── js/script.js / script.min.js
├── img/                 # PNG/JPG + WebP, згруповані за секціями
│   ├── Header/ Home/ History/ Services/ Gallery/ Footer/ Background_Image/
├── bootstrap-5.0.1-dist/
└── README.md
```

## Запуск локально

Сторінка статична — для перегляду збірка не потрібна:

```bash
open Project2_Barber/index.html   # macOS
# або
python3 -m http.server 8000       # http://localhost:8000/Project2_Barber/
```

## Нотатки та можливі покращення

- **Власний скрипт не підключено.** Єдиний `<script>` в `index.html` — це `bootstrap.bundle.js`, тож ані визначення підтримки WebP, ані jQuery-обробник `$("figure")` із `js/script.js` не виконуються. (WebP усе одно працює — формат обирає `<picture>`/`<source>` нативно.) Щоб увімкнути скрипт, додай `<script src="js/script.min.js"></script>`; обробнику `$("figure")` ще потрібен jQuery або переписування на чистому JS.
- У `css/style.css` немає правил `.webp` / `.no-webp`, тож механізм із класами на `<body>` не вплинув би на стилі, навіть якби скрипт виконувався.
- Заголовок hero містить **«Hairstylel»** — одрук замість «Hairstyle» — варто виправити в `index.html`.
- Файли `*.min.css` / `*.min.js` — це заздалегідь стиснені копії вихідників, але в репозиторії немає ані білд-конфіга, ані таск-раннера, що їх генерує. Тож будь-яку зміну треба вносити руками і у вихідний, і в мініфікований файл.
- `index.html` закомічено у мініфікованому вигляді, що ускладнює читання й diff — варто тримати поруч і читабельне джерело.

## Автор

**Павло Сенів** — [@pavloseniv](https://github.com/pavloseniv)
