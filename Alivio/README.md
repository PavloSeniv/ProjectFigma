# Alivio

A responsive, accessible landing page for **Alivio**, a concept stress-management
journaling app. Coded from a Figma layout and part of the
[ProjectFigma](../README.md) collection, with interactive sign-up flows built on
Bootstrap modals and toasts.

**Live demo:** https://pavloseniv.github.io/ProjectFigma/Alivio/

## Overview

Alivio is presented as a personalized journaling experience that helps people become
aware of and manage their stress. The **home page** is a full landing (hero, how it works,
a customer story and pricing), and each nav item also has its own **dedicated page** in the
same design.

### Pages

| Page | What's on it |
|------|--------------|
| `index.html` | **Why Alivio** — home landing: hero *"Be aware, Manage well."* plus an overview of how it works, the success story and pricing |
| `solutions.html` | **Solutions** — "Understand & Release the stress in 3 steps" (Personalize · Write & Understand · Alivio!) |
| `community.html` | **Community** — "Kayla's success story" with an embedded YouTube video (a short guided meditation) |
| `pricing.html` | **Pricing** — the "Customized For" product card and a "Find Your Way" call to action |

All pages share the same sticky navbar, footer, modals and toasts.

## Interactive features

- **Sign-in modal** — email + password with client-side validation, confirmed by a toast.
- **Start-trial modal** — name, email and a focus-area select; a success toast tailors the trial.
- **Newsletter subscribe** — footer form with validation and a toast.
- The "Start Trial", "Let's get started" and "Find Your Way" buttons all open the relevant modal.

## Tech stack

- **HTML5** — four semantic pages sharing a sticky navbar and footer, with landmarks, `aria-*`, a skip link and a per-page heading order.
- **[Bootstrap 5.0.0-beta2](https://getbootstrap.com/)** — grid, navbar, buttons, **modals** and **toasts** (vendored under `bootstrap-5.0.0-beta2-dist/`).
- **Custom CSS** — `css/style.css`: colours, typography, a responsive `background-size: cover` hero, focus-visible states, transitions and a `prefers-reduced-motion` fallback.
- **Custom JS** — `js/script.js` (vanilla): form validation and toast confirmations for the sign-in, trial and newsletter forms.
- **Google Fonts** — [Lato](https://fonts.google.com/specimen/Lato), [Merriweather](https://fonts.google.com/specimen/Merriweather) and [Suez One](https://fonts.google.com/specimen/Suez+One).

## Project structure

```
Alivio/
├── index.html           # Why Alivio (home landing, all sections)
├── solutions.html       # Solutions page
├── community.html       # Community page
├── pricing.html         # Pricing page
├── css/
│   └── style.css
├── js/
│   └── script.js        # form validation, toasts, dynamic footer year
├── img/                 # photos and logos used across the pages
├── video/
│   └── video1.mp4       # legacy asset — Community now embeds a YouTube video
├── bootstrap-5.0.0-beta2-dist/
│   ├── css/
│   └── js/
└── README.md
```

## Running locally

Static page — no build step required:

```bash
# from the repository root
open Alivio/index.html          # macOS

# or serve it
python3 -m http.server 8000       # then visit http://localhost:8000/Alivio/
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

**Демо:** https://pavloseniv.github.io/ProjectFigma/Alivio/

## Про проект

Alivio подається як персоналізований щоденник, що допомагає усвідомлювати стрес і
керувати ним. **Головна** — це повний лендинг (hero, як це працює, історія клієнта та
ціни), а кожен пункт меню має ще й **власну сторінку** в тому ж дизайні.

### Сторінки

| Сторінка | Що на ній |
|----------|-----------|
| `index.html` | **Why Alivio** — головний лендинг: hero *«Be aware, Manage well.»* плюс огляд усіх секцій |
| `solutions.html` | **Solutions** — «Understand & Release the stress in 3 steps» (Personalize · Write & Understand · Alivio!) |
| `community.html` | **Community** — «Kayla's success story» із вбудованим відео з YouTube (коротка медитація) |
| `pricing.html` | **Pricing** — картка «Customized For» і заклик «Find Your Way» |

Усі сторінки мають спільні sticky-навбар, футер, модалки і тости.

## Інтерактив

- **Модалка входу** — email + пароль із валідацією, підтвердження тостом.
- **Модалка пробного періоду** — ім'я, email і вибір напряму; тост персоналізує тріал.
- **Підписка** — форма у футері з валідацією і тостом.
- Кнопки «Start Trial», «Let's get started» і «Find Your Way» відкривають відповідну модалку.

## Стек

- **HTML5** — чотири семантичні сторінки зі спільними sticky-навбаром і футером, лендмарками, `aria-*`, skip-link і ієрархією заголовків на кожній сторінці.
- **[Bootstrap 5.0.0-beta2](https://getbootstrap.com/)** — сітка, навбар, кнопки, **модалки** та **тости** (у `bootstrap-5.0.0-beta2-dist/`).
- **Власний CSS** — `css/style.css`: кольори, типографіка, адаптивний hero (`background-size: cover`), `:focus-visible`, переходи та підтримка `prefers-reduced-motion`.
- **Власний JS** — `js/script.js` (vanilla): валідація форм і тости-підтвердження для входу, тріалу та підписки.
- **Google Fonts** — Lato, Merriweather і Suez One.

## Структура

```
Alivio/
├── index.html           # Why Alivio (головний лендинг)
├── solutions.html       # сторінка Solutions
├── community.html       # сторінка Community
├── pricing.html         # сторінка Pricing
├── css/style.css
├── js/script.js         # валідація форм, тости, динамічний рік
├── img/                 # фото та логотипи
├── video/video1.mp4     # застарілий файл — Community вбудовує відео з YouTube
├── bootstrap-5.0.0-beta2-dist/
└── README.md
```

## Запуск локально

```bash
open Alivio/index.html          # macOS
# або
python3 -m http.server 8000       # http://localhost:8000/Alivio/
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
