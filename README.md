# ConsoleWebKit

[Website](https://peteroxhka.github.io/ConsoleWebKit/) · [Source](https://github.com/Peteroxhka/ConsoleWebKit)

## Русский

Хаб определяет консоль и предполагаемую прошивку по User-Agent, проверяет возможности браузера и подбирает внешний модуль PS4 по **точному списку версий**. Ручной выбор позволяет посмотреть совместимость. Другие консоли показывают «Пока нет доступного WebKit в этом хабе» — это статус интеграции, а не утверждение об отсутствии методов для этой платформы вообще.

### Запуск PS4

1. Открой сайт в браузере PS4. Проверь точную прошивку в настройках консоли.
2. Хаб автоматически выберет модуль для распознанной версии.
3. Нажми «Запустить на хосте Akela». Браузер перейдёт на соответствующую страницу внешнего хоста в той же вкладке. Его модуль начинает собственную процедуру запуска.

Посещение хаба само по себе ничего не запускает. Ручной выбор PS4 на телефоне или ПК не разблокирует запуск. Если введённая версия отличается от User-Agent, запуск также блокируется: внешний модуль определяет прошивку самостоятельно. User-Agent не является достоверным измерением системы.

Интеграция **не тестировалась на физической PS4**. Доступность означает наличие маршрута в прочитанных исходниках, а не гарантию успешного джейлбрейка. Возможны сбои и перезапуски консоли. Сохрани игру перед запуском. Хаб не отображает фиктивный результат «успешно» и не обещает офлайн-работу внешнего хоста.

### Подключённые версии

| Версии PS4 | Внешний модуль |
|---|---|
| 6.70, 6.71 | PSFree |
| 6.72 | 6.72 host |
| 7.00, 7.01, 7.02, 7.50, 7.51, 7.55 | PSFree |
| 8.00, 8.01, 8.03, 8.50, 8.52 | PSFree |
| 9.00, 9.03, 9.04, 9.50, 9.51, 9.60 | PSFree |
| 10.00, 10.50 | G2AllPro |
| 11.00, 11.50, 11.52 | Slopkit |
| 11.02 | CSSFontFace |
| 12.00, 12.02, 12.50, 12.52 | RawGame4 |
| 13.00 | G2AllPro |
| 13.02, 13.04, 13.50, 13.52 | 13.x host |
| 14.00 | 14.00 host |

Промежуточные номера не считаются автоматически совместимыми. Например, 10.01 не направляется в модуль 10.00. Версия 14.02 пока закрыта для автоматического запуска: найденный альтернативный проект описывает отдельный сервер на ПК, а не готовую интеграцию с нашим GitHub Pages.

### Источники и ограничения

Сверено 13 ноября 2026 с [Akela-x/ps4freeforall, коммит 0cd0160](https://github.com/Akela-x/ps4freeforall/tree/0cd01608f5f8fb0095cd59ded2e94666eaa275f7): главный маршрутизатор, список в `ran/psfree/index.html`, точные версии в `ran/g2allpro/index.html`, таблицы остальных модулей. В заголовках upstream встречаются более широкие диапазоны, чем в реализациях; хаб использует консервативный точный список.

Хаб содержит **ссылки на внешние модули**, а не собственные копии эксплойтов или бинарных файлов. Внешний хост может измениться независимо от зафиксированного источника. Авторы исходных модулей и лицензии указаны в upstream. Для собственной копии потребуется отдельно проверить лицензии и все зависимости.

## English

ConsoleWebKit detects console/firmware hints and selects an exact PS4 route from an allowlist starting at 6.70. Pressing the launch button navigates to the selected external Akela module; it is not a locally bundled jailbreak. Other consoles and unknown firmware remain unavailable in this hub. Manual selection on a PC cannot enable execution, and a firmware mismatch blocks launch.

Availability is based on source inspection, **not hardware validation**. There are no fake success messages or offline-cache promises. Firmware 14.02 is not connected for automatic launch. The linked alternative describes a separate local PC server.

## Development

- `lib/console-detect.js`: ES5 user-agent parser.
- `lib/ps4-launcher.js`: exact firmware allowlist, external URLs and launch guard.
- `app.js`: diagnostics, RU/EN UI and explicit click handler.
- `tests/`: routing boundaries, unsupported platforms, firmware mismatch and UI structure.

```sh
node --check app.js
node --check lib/console-detect.js
node --check lib/ps4-launcher.js
node --test tests/*.test.mjs
```

GitHub Actions validates and deploys `main`. The app uses no Supabase credentials, analytics, or backend. All console diagnostics stay in the browser; visiting the external host is a normal navigation to that provider.


## Подборка проектов GitHub

ConsoleWebKit содержит каталог из **15 доступных сторонних репозиториев**, предоставленных владельцем проекта, с прямыми ссылками на авторов. Они разделены по платформам (PS4, PS5, Nintendo Switch) и назначению: исследования уязвимостей и точки входа, кастомные прошивки, загрузчики, homebrew, эмуляторы и утилиты.

**Не все эти программы предназначены для джейлбрейка.** Например, `PS5SX2` — эмулятор для PS5, `prospero-win` — среда совместимости с Windows-приложениями, `ps-patch-system` — система патчей приложений PS4/PS5, а `Atmosphère` — кастомная прошивка Switch. Платформа и название в карточке не гарантируют совместимость с конкретной прошивкой. Встроенный каталог не загружает и не исполняет сторонний код.

Две присланные ссылки возвращали **404** при проверке 13 ноября 2026 года: `Swordpdf/ProsperoEden` и `blackbearreloaded/ProsperoEden`. Их не выдаём за доступные репозитории.

### Интеграция с Repo Radar

Эти проекты также добавлены в список проверяемых GitHub-источников основного каталога Repo Radar. Сборщик проверяет актуальные GitHub ID и состояние репозиториев, не добавляет пустые и архивные проекты, не создаёт дублей и отдельно просматривает публичные проекты авторов `Peteroxhka` и `dnestruev`.

## GitHub projects directory

ConsoleWebKit includes **15 accessible third-party GitHub repositories** curated from owner-submitted links. The directory groups projects by platform and purpose: security entry-point research, custom firmware, loaders, homebrew apps, emulators and utilities. These are **not interchangeable jailbreak methods**, and a listed project has no implied firmware compatibility. The page never embeds or automatically runs third-party code.

The submitted `Swordpdf/ProsperoEden` and `blackbearreloaded/ProsperoEden` URLs returned **404** when checked on 13 November 2026, so they are not presented as available. The same available repository names are included in Repo Radar's reviewed GitHub ingestion sources, which skip duplicates and empty projects.

