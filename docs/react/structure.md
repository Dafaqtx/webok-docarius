---
sidebar_position: 2
---

# Файловая структура

```plaintext
|___MyComponent1
|   |___components
|   |   |___MySubComponent1…
|   |   |___index.ts
|   |
|   |___constants
|   |   |___index.ts
|   |
|   |___utils
|   |   |___utility1
|   |   |   |___index.ts
|   |   |
|   |   |___utility2…
|   |   |
|   |   |___index.ts
|   |
|   |_____mocks__
|   |   |___index.tsx
|   |
|   |___hooks
|   |   |___useMyHook1
|   |   |   |___index.ts
|   |   |
|   |   |___useMyHook2…
|   |   |
|   |   |___index.ts
|   |
|   |___state
|   |   |___reducer
|   |   |   |___index.ts
|   |   |
|   |   |___actions
|   |       |___index.ts
|   |
|   |___context
|   |   |___index.ts
|   |
|   |___styles.ts
|   |
|   |_____shapshots__
|   |   |___index.spec.tsx.snap
|   |
|   |___index.tsx
|   |___index.spec.tsx
|
|___index.ts
```

**В корне каталога компонента могут располагаться (по необходимости) следующие директории:**

- `hooks` – хуки
- `utils` – утилиты
- `constants` – константы
- `state` – стор для useReducer
- `components` – дочерние компоненты. Структура дочерних компонентов аналогична
- `context` - контекст
- `__mocks__` - моки (для подмены в тестах)
- `__snapshots__` - папка снепшотов теста, генерируемая jest.

**В корне каталога компонента располагаются следующие файлы:**

- `index.tsx` - файл компонента.
- `index.spec.tsx` - файл теста.
- `styles.ts` - стили css-in-js.

```jsx title="Пример оформления компонента с ресурсами. Файл index.tsx."
import React, { FC } from "react";

import { SITE_NAME } from "./constants";
import { useCurrentDay } from "./hooks";
import { formattedDay } from "./utils";

import logo from './img/logo.svg";

export interface HeaderProps {
   /**
   * Заголовок страницы
   */
  title: string;
}

/**
 * Шапка сайта, отображает приветственный заголовок
 * @param title
 */
export const Header(): FC<HeaderProps> = ({ title }) => {
    const day = useCurrentDay();

    return (
        <header>
            <img src={logo} alt={SITE_NAME}>
            <h1>{title}</h1>
            <div>Сегодня: {formattedDay(day)}</div>
        </header>
    )
}
```
