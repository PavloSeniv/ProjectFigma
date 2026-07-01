# Barber

A responsive, accessible landing page for a **barbershop**, coded from a Figma layout.
Part of the [ProjectFigma](../README.md) collection and the second project in the series —
it layers WebP image optimization and interactive Bootstrap components (modals, toasts,
a gallery lightbox) on top of the plain HTML/CSS approach.

**Live demo:** https://pavloseniv.github.io/ProjectFigma/Barber/

## Overview

A single-page site for a barbershop brand ("Barber"): a hero, brand story, service list
and a photo gallery — with a working appointment-booking flow.

### Sections

| Anchor | Section | Content |
|--------|---------|---------|
| `#Home` | Hero | Headline *"Hairstyle Reflects The Personality Inside You"* and a "Get Started" button that opens the booking modal |
| `#History` | Our History | Brand story with an image and a "Learn more" button (opens a story modal) |
| `#Service` | Services We Provide | Three cards — **Hair Cut**, **Beard Cut**, **Facial Pack** — each with a price and a "Book" button that pre-selects the service |
| `#Gallery` | Our Gallery | A six-image gallery; each photo opens in a lightbox, plus a "View All" button |
| footer | Footer | Logo, tagline, a newsletter subscribe form and Facebook / Twitter / Google links |

## Interactive features

- **Booking modal** — name, phone, service, date and time with client-side validation; a success toast confirms the booking.
- **Sign-in modal** — opened from the header profile icon.
- **Story modal** — "Learn more" in the History section.
- **Gallery lightbox** — click any gallery photo to view it larger in a modal.
- **Newsletter subscribe** — footer form with validation and a toast.
- **Toasts** — non-blocking confirmations for every action.
- **Live details** — footer social links open Facebook / Twitter / Google in a new tab, and the copyright year updates itself via JS.

## Tech stack

- **HTML5** — a single, readable, semantic `index.html` (landmarks, `aria-*`, a skip link).
- **[Bootstrap 5.0.1](https://getbootstrap.com/)** — grid, navbar, cards, buttons, **modals** and **toasts** (vendored under `bootstrap-5.0.1-dist/`).
- **Custom CSS** — `css/style.css` (single source of truth): design tokens, responsive layout, focus-visible states, transitions and a `prefers-reduced-motion` fallback.
- **Custom JS** — `js/script.js` (vanilla, **no jQuery**): WebP feature detection, form validation, booking/sign-in/newsletter handling with toasts, service pre-select and the gallery lightbox.
- **WebP images** — every raster image ships as both `.png`/`.jpg` and `.webp`, served via `<picture>` + `<source>` so the browser natively picks the format it supports.
- **SVG assets** — icons and the logo are loaded as accessible `<img>` elements.
- **Google Fonts** — [Catamaran](https://fonts.google.com/specimen/Catamaran).

## Project structure

```
Barber/
├── index.html
├── css/
│   └── style.css        # all styles (loaded by index.html)
├── js/
│   └── script.js        # vanilla JS: WebP detect, forms, toasts, lightbox
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

Static page — no build step required:

```bash
# from the repository root
open Barber/index.html   # macOS

# or serve it
python3 -m http.server 8000       # then visit http://localhost:8000/Barber/
```

## Accessibility & responsiveness

- Semantic landmarks (`header`/`nav`/`main`/`section`/`footer`), skip link, `aria-label`/`aria-labelledby`, and descriptive `alt` text.
- Text on the brand-blue surfaces uses dark navy for WCAG-AA contrast; interactive elements have visible `:focus-visible` outlines.
- Fluid typography (`clamp()`), a sticky navbar, and layouts that reflow down to small phones.

## Author

**Pavlo Seniv** — [@pavloseniv](https://github.com/pavloseniv)

---

# Barber (укр.)

Адаптивний, доступний лендинг для **барбершопу**, зверстаний за макетом із Figma. Входить
до збірки [ProjectFigma](../README.md) і є другим проектом серії — тут поверх звичайного
HTML/CSS додано оптимізацію зображень у WebP та інтерактивні компоненти Bootstrap
(модалки, тости, лайтбокс галереї).

**Демо:** https://pavloseniv.github.io/ProjectFigma/Barber/

## Про проект

Односторінковий сайт бренду барбершопу («Barber»): hero-блок, історія бренду, перелік
послуг і фотогалерея — з робочим сценарієм запису на прийом.

### Секції

| Якір | Секція | Вміст |
|------|--------|-------|
| `#Home` | Hero | Заголовок *«Hairstyle Reflects The Personality Inside You»* і кнопка «Get Started», що відкриває модалку запису |
| `#History` | Our History | Історія бренду із зображенням і кнопкою «Learn more» (модалка) |
| `#Service` | Services We Provide | Три картки — **Hair Cut**, **Beard Cut**, **Facial Pack** — з ціною і кнопкою «Book», що підставляє послугу |
| `#Gallery` | Our Gallery | Галерея з шести фото; кожне відкривається у лайтбоксі, плюс кнопка «View All» |
| footer | Footer | Логотип, слоган, форма підписки і посилання Facebook / Twitter / Google |

## Інтерактив

- **Модалка запису** — ім'я, телефон, послуга, дата й час із валідацією; успіх підтверджує тост.
- **Модалка входу** — з іконки профілю в хедері.
- **Модалка історії** — кнопка «Learn more».
- **Лайтбокс галереї** — клік по фото відкриває його більшим.
- **Підписка** — форма у футері з валідацією і тостом.
- **Тости** — ненав'язливі підтвердження дій.
- **Динамічні деталі** — соцпосилання у футері відкривають Facebook / Twitter / Google у новій вкладці, а рік у копірайті оновлюється сам через JS.

## Стек

- **HTML5** — один читабельний семантичний `index.html` (лендмарки, `aria-*`, skip-link).
- **[Bootstrap 5.0.1](https://getbootstrap.com/)** — сітка, навбар, картки, кнопки, **модалки** та **тости** (у `bootstrap-5.0.1-dist/`).
- **Власний CSS** — `css/style.css` (єдине джерело): токени дизайну, адаптив, `:focus-visible`, переходи та підтримка `prefers-reduced-motion`.
- **Власний JS** — `js/script.js` (vanilla, **без jQuery**): визначення WebP, валідація форм, обробка запису/входу/підписки з тостами, підстановка послуги і лайтбокс.
- **WebP-зображення** — кожне растрове є і у `.png`/`.jpg`, і у `.webp`; віддається через `<picture>` + `<source>`.
- **SVG** — іконки та логотип підключені як доступні `<img>`.
- **Google Fonts** — [Catamaran](https://fonts.google.com/specimen/Catamaran).

## Структура

```
Barber/
├── index.html
├── css/style.css        # усі стилі (підключає index.html)
├── js/script.js         # vanilla JS: WebP, форми, тости, лайтбокс
├── img/                 # PNG/JPG + WebP, згруповані за секціями
│   ├── Header/ Home/ History/ Services/ Gallery/ Footer/ Background_Image/
├── bootstrap-5.0.1-dist/
└── README.md
```

## Запуск локально

```bash
open Barber/index.html   # macOS
# або
python3 -m http.server 8000       # http://localhost:8000/Barber/
```

## Доступність та адаптив

- Семантичні лендмарки, skip-link, `aria-label`/`aria-labelledby`, змістовні `alt`.
- Текст на блакитних поверхнях — темно-синій задля контрасту WCAG-AA; у інтерактивних елементів видимий `:focus-visible`.
- Гнучка типографіка (`clamp()`), липкий навбар і верстка, що коректно перебудовується аж до вузьких телефонів.

## Автор

**Павло Сенів** — [@pavloseniv](https://github.com/pavloseniv)
