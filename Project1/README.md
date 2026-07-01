# Alivio

A responsive landing page for **Alivio**, a concept stress-management journaling app.
The page was coded from a Figma layout and is part of the
[ProjectFigma](../README.md) collection.

**Live demo:** https://pavloseniv.github.io/ProjectFigma/Project1/

## Overview

Alivio is presented as a personalized journaling experience that helps people become
aware of and manage their stress. The single-page site walks a visitor through the value
proposition, how the product works, a customer story, and a pricing/product call to action.

### Sections

| Anchor | Section | Content |
|--------|---------|---------|
| `#WhyAlivio` | Hero | Brand navbar, headline *"Be aware, Manage well."* and a call to action over a background photo |
| `#Solutions` | How it works | Three steps — **Personalize**, **Write & Understand**, **Alivio!** |
| `#Community` | Success story | "Kayla's success story" text alongside an embedded `<video>` |
| `#Pricing` | Our product | A "Customized For" card and a contact call to action |

## Tech stack

- **HTML5** — single `index.html`
- **[Bootstrap 5.0.0-beta2](https://getbootstrap.com/)** — grid, navbar and buttons (vendored under `bootstrap-5.0.0-beta2-dist/`)
- **Custom CSS** — `css/style.css` for colors, typography and layout tweaks
- **Google Fonts** — [Lato](https://fonts.google.com/specimen/Lato), [Merriweather](https://fonts.google.com/specimen/Merriweather) and [Suez One](https://fonts.google.com/specimen/Suez+One)
- Responsive, mobile-first layout with a collapsible navbar

## Project structure

```
Project1/
├── index.html
├── css/
│   └── style.css
├── img/                 # photos and logos used across the page
├── video/
│   └── video1.mp4       # embedded in the Community section
├── bootstrap-5.0.0-beta2-dist/
│   ├── css/
│   └── js/
└── README.md
```

## Running locally

Static page — no build step required:

```bash
# from the repository root
open Project1/index.html          # macOS

# or serve it
python3 -m http.server 8000       # then visit http://localhost:8000/Project1/
```

## Notes & possible improvements

- Bootstrap is pinned to a **beta** release (`5.0.0-beta2`); upgrading to a stable 5.x would be a safe follow-up.
- The viewport meta uses `user-scalable=no`, which blocks pinch-zoom — worth removing for better accessibility.
- The vendored Bootstrap `dist` folder is committed to the repo; it could instead be pulled from a CDN or a package manager.

## Author

**Pavlo Seniv** (Seniv Pavlo) — [@pavloseniv](https://github.com/pavloseniv)

---

# Alivio (укр.)

Адаптивний лендинг для **Alivio** — концептуального застосунку-щоденника для керування
стресом. Сторінку зверстано за макетом із Figma; вона входить до збірки
[ProjectFigma](../README.md).

**Демо:** https://pavloseniv.github.io/ProjectFigma/Project1/

## Про проект

Alivio подається як персоналізований щоденник, що допомагає усвідомлювати стрес і
керувати ним. Односторінковий сайт проводить відвідувача через переваги продукту, опис
того, як він працює, історію клієнта та блок із продуктом і закликом до дії.

### Секції

| Якір | Секція | Вміст |
|------|--------|-------|
| `#WhyAlivio` | Hero | Навбар із брендом, заголовок *«Be aware, Manage well.»* і кнопка на фоновому фото |
| `#Solutions` | How it works | Три кроки — **Personalize**, **Write & Understand**, **Alivio!** |
| `#Community` | Історія успіху | Текст «Kayla's success story» поруч із вбудованим `<video>` |
| `#Pricing` | Our product | Картка «Customized For» і контактний заклик до дії |

## Стек

- **HTML5** — один `index.html`
- **[Bootstrap 5.0.0-beta2](https://getbootstrap.com/)** — сітка, навбар і кнопки (лежить у `bootstrap-5.0.0-beta2-dist/`)
- **Власний CSS** — `css/style.css` для кольорів, типографіки та правок макета
- **Google Fonts** — Lato, Merriweather і Suez One
- Адаптивна mobile-first верстка зі згортним навбаром

## Структура

```
Project1/
├── index.html
├── css/style.css
├── img/                 # фото та логотипи сторінки
├── video/video1.mp4     # вбудоване у секцію Community
├── bootstrap-5.0.0-beta2-dist/
└── README.md
```

## Запуск локально

Сторінка статична — збірка не потрібна:

```bash
open Project1/index.html          # macOS
# або
python3 -m http.server 8000       # http://localhost:8000/Project1/
```

## Нотатки та можливі покращення

- Bootstrap зафіксовано на **beta**-версії (`5.0.0-beta2`) — варто оновити до стабільної 5.x.
- У meta viewport стоїть `user-scalable=no`, що блокує масштабування пальцями — краще прибрати задля доступності.
- Папка `dist` Bootstrap закомічена в репозиторій; її можна замінити на CDN або пакетний менеджер.

## Автор

**Павло Сенів** — [@pavloseniv](https://github.com/pavloseniv)
