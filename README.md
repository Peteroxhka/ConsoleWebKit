# ConsoleWebKit

**Languages / Языки:** [Русский](#русский) · [English](#english)

**Website / Сайт:** https://peteroxhka.github.io/ConsoleWebKit/  
**GitHub:** https://github.com/Peteroxhka/ConsoleWebKit  
**Repo Radar catalog:** https://peteroxhka.github.io/repo-radar/?category=console_webkit

---

## Русский

### О проекте

**ConsoleWebKit** — отдельный сайт для диагностики браузеров игровых консолей и поиска связанных проектов. Он предназначен для PlayStation 3, PlayStation 4, PlayStation 5, PS Vita, Nintendo Wii U, Nintendo Switch и Xbox.

Сайт запускается прямо в браузере, не требует установки программ, регистрации, сервера или передачи данных в Supabase. Он старается определить модель консоли по User-Agent браузера. Для некоторых браузеров PS4 и PS5 эта строка может содержать приблизительную версию системной прошивки, но браузер не обязан сообщать её корректно.

Если устройство не распознано, можно открыть полный каталог консольных проектов. Если браузер ошибся в модели, доступна отдельная сворачиваемая панель ручного выбора консоли и ввода версии прошивки. Ручной ввод обозначает лишь предпочтение пользователя, а не результат проверки.

### Что умеет сайт

- Автоматически анализирует только доступную браузеру строку `navigator.userAgent`.
- Показывает предполагаемую модель консоли, возможную версию прошивки и наличие упоминания WebKit.
- Проверяет стандартные функции браузера: Canvas 2D, WebGL, localStorage, сенсорные события, JavaScript-модули и WebAssembly.
- Предлагает русский и английский язык интерфейса.
- Работает на статическом GitHub Pages без внешних скриптов, API-ключей и серверной базы данных.
- Переходит к соответствующей категории репозиториев в Repo Radar.
- Использует обычный JavaScript с синтаксисом ES5, чтобы работать в более старых консольных браузерах. Совместимость на конкретном устройстве зависит от его браузера и требует реального тестирования.

### Безопасность и ограничения

**ConsoleWebKit не выполняет эксплойты, джейлбрейк, загрузку пейлоадов или обход защиты.** Это справочный и диагностический сайт.

User-Agent можно подделать. У некоторых браузеров сведения о модели и прошивке вообще отсутствуют. Даже если сайт определил версию, это не означает, что на ней работает какой-то конкретный сторонний проект. Страница не проверяет уязвимости системы и не получает доступа к консоли.

Проверки возможностей браузера локальные и безвредные. Для хранения выбранного языка используется localStorage, когда он доступен. Данные о консоли не отправляются с помощью аналитических запросов. Обычный хостинг GitHub Pages может вести стандартные серверные журналы посещений.

### Разработка и запуск

Репозиторий устроен просто: `index.html` — интерфейс, `styles.css` — оформление, `app.js` — диагностическая логика и перевод, `lib/console-detect.js` — безопасный парсер User-Agent, `tests/` — автоматические проверки.

Локально достаточно открыть `index.html` в браузере. Для запуска через HTTP можно использовать любой простой статический веб-сервер. Тесты запускаются командой:

```bash
node --check app.js
node --check lib/console-detect.js
node --test tests/*.test.mjs
```

GitHub Actions запускает тесты при коммите в `main` и публикует файлы на GitHub Pages, когда Pages включён в настройках репозитория.

---

## English

### Overview

**ConsoleWebKit** is an independent browser diagnostics and project discovery site for PlayStation 3, PlayStation 4, PlayStation 5, PS Vita, Nintendo Wii U, Nintendo Switch, and Xbox consoles.

The site runs in a browser without an installer, user account, remote database, or Supabase credentials. It tries to identify the console through the browser's publicly exposed user-agent. Some PlayStation 4 and PlayStation 5 browsers include a possible firmware version in that string, but the information may be absent or incorrect.

If detection fails, visitors can open the full console-project catalog. When the detected model is wrong, an optional collapsible section allows a manual console selection and firmware entry. Manual input represents a user preference, **not** verified device information.

### Features

- Conservative device detection via `navigator.userAgent`.
- Display of the reported model, potential firmware hint, and browser engine hint.
- Standard, read-only browser feature checks: Canvas 2D, WebGL, localStorage, touch events, JavaScript modules, and WebAssembly.
- Russian and English translations.
- Responsive standalone static website with no backend, analytics code, or private API keys.
- Contextual links to console-related projects indexed in Repo Radar.
- ES5-compatible JavaScript to improve support for older console browsers. Actual behavior on every device must still be tested.

### Safety and limitations

**ConsoleWebKit does not execute exploits, jailbreak devices, load payloads, or bypass security restrictions.** It is an informational diagnostics and discovery website.

A user-agent string may be spoofed or lack identifying data. A reported firmware version does **not** prove that third-party tools are compatible. The page does not probe software vulnerabilities or obtain privileged access to any console.

Capability checks are local standard browser operations. Language preference may be saved in localStorage. No console fingerprint is uploaded through application analytics; GitHub Pages may still maintain ordinary hosting access logs.

### Architecture and local development

The website uses `index.html` for markup, `styles.css` for its design, `app.js` for interface and diagnostic logic, `lib/console-detect.js` for user-agent parsing, and `tests/` for regression tests.

You can open `index.html` directly or serve the directory with a static HTTP server. Run tests using:

```bash
node --check app.js
node --check lib/console-detect.js
node --test tests/*.test.mjs
```

The GitHub Actions workflow tests each change on `main` and deploys to GitHub Pages once GitHub Pages has been enabled for this repository.

---

Maintained by **Peteroxhka**. Independent of Sony, Nintendo and Microsoft.
