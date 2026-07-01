# Alivio

A responsive, accessible landing page for **Alivio**, a concept stress-management
journaling app. Coded from a Figma layout and part of the
[ProjectFigma](../README.md) collection, with interactive sign-up flows built on
Bootstrap modals and toasts.

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
| `#Pricing` | Our product | A "Customized For" card and a "Find Your Way" call to action |

## Interactive features

- **Sign-in modal** — email + password with client-side validation, confirmed by a toast.
- **Start-trial modal** — name, email and a focus-area select; a success toast tailors the trial.
- **Newsletter subscribe** — footer form with validation and a toast.
- The "Start Trial", "Let's get started" and "Find Your Way" buttons all open the relevant modal.

## Tech stack

- **HTML5** — a single, semantic `index.html` with landmarks, `aria-*`, a skip link and a proper heading order.
- **[Bootstrap 5.0.0-beta2](https://getbootstrap.com/)** — grid, navbar, buttons, **modals** and **toasts** (vendored under `bootstrap-5.0.0-beta2-dist/`).
- **Custom CSS** — `css/style.css`: colours, typography, a responsive `background-size: cover` hero, focus-visible states, transitions and a `prefers-reduced-motion` fallback.
- **Custom JS** — `js/script.js` (vanilla): form validation and toast confirmations for the sign-in, trial and newsletter forms.
- **Google Fonts** — [Lato](https://fonts.google.com/specimen/Lato), [Merriweather](https://fonts.google.com/specimen/Merriweather) and [Suez One](https://fonts.google.com/specimen/Suez+One).

## Project structure

```
Project1/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js        # form validation + toasts
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

## Accessibility & responsiveness

- Skip link, semantic landmarks, section labels wired to real headings, `aria-label` on the video, and descriptive `alt` text.
- Visible `:focus-visible` outlines, smooth in-page scrolling with `scroll-margin`, and a `prefers-reduced-motion` fallback.
- Fluid hero background (`cover`) and mobile-friendly forms that stack on small screens.

## Notes & possible improvements

- Bootstrap is pinned to a **beta** release (`5.0.0-beta2`); upgrading to a stable 5.x would be a safe follow-up (note: `getOrCreateInstance` only exists from 5.1, so the JS uses the version-safe `getInstance() || new` pattern).
- The Pricing card is built from a background-image technique with breakpoint-specific images (`Photo5*.png`); a pure-CSS card would be easier to maintain.
- The vendored Bootstrap `dist` folder is committed; it could instead come from a CDN or a package manager.

## Author

**Pavlo Seniv** (Seniv Pavlo) — [@pavloseniv](https://github.com/pavloseniv)

---

# Alivio (укр.)

Адаптивний, доступний лендинг для **Alivio** — концептуального застосунку-щоденника для
керування стресом. Зверстано за макетом із Figma; входить до збірки
[ProjectFigma](../README.md), з інтерактивними сценаріями реєстрації на модалках і тостах
Bootstrap.

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
| `#Pricing` | Our product | Картка «Customized For» і заклик до дії «Find Your Way» |

## Інтерактив

- **Модалка входу** — email + пароль із валідацією, підтвердження тостом.
- **Модалка пробного періоду** — ім'я, email і вибір напряму; тост персоналізує тріал.
- **Підписка** — форма у футері з валідацією і тостом.
- Кнопки «Start Trial», «Let's get started» і «Find Your Way» відкривають відповідну модалку.

## Стек

- **HTML5** — один семантичний `index.html` із лендмарками, `aria-*`, skip-link і коректною ієрархією заголовків.
- **[Bootstrap 5.0.0-beta2](https://getbootstrap.com/)** — сітка, навбар, кнопки, **модалки** та **тости** (у `bootstrap-5.0.0-beta2-dist/`).
- **Власний CSS** — `css/style.css`: кольори, типографіка, адаптивний hero (`background-size: cover`), `:focus-visible`, переходи та підтримка `prefers-reduced-motion`.
- **Власний JS** — `js/script.js` (vanilla): валідація форм і тости-підтвердження для входу, тріалу та підписки.
- **Google Fonts** — Lato, Merriweather і Suez One.

## Структура

```
Project1/
├── index.html
├── css/style.css
├── js/script.js         # валідація форм + тости
├── img/                 # фото та логотипи сторінки
├── video/video1.mp4     # вбудоване у секцію Community
├── bootstrap-5.0.0-beta2-dist/
└── README.md
```

## Запуск локально

```bash
open Project1/index.html          # macOS
# або
python3 -m http.server 8000       # http://localhost:8000/Project1/
```

## Доступність та адаптив

- Skip-link, семантичні лендмарки, мітки секцій прив'язані до справжніх заголовків, `aria-label` на відео, змістовні `alt`.
- Видимі `:focus-visible`, плавний скрол із `scroll-margin`, підтримка `prefers-reduced-motion`.
- Гнучкий фон hero (`cover`) і форми, що стають на всю ширину на малих екранах.

## Нотатки та можливі покращення

- Bootstrap зафіксовано на **beta** (`5.0.0-beta2`) — варто оновити до стабільної 5.x (увага: `getOrCreateInstance` є лише з 5.1, тож JS використовує сумісний патерн `getInstance() || new`).
- Картку в Pricing побудовано на фоновому зображенні з різними картинками під брейкпоінти (`Photo5*.png`); чиста CSS-картка була б простішою в підтримці.
- Папка `dist` Bootstrap закомічена; її можна замінити на CDN або пакетний менеджер.

## Автор

**Павло Сенів** (Seniv Pavlo) — [@pavloseniv](https://github.com/pavloseniv)
