# [Дизайн-система Consta](http://consta.gazprom-neft.ru/) | header-umd

Универсальный модуль компонента `Header` для проектов не на `ReactJS`. Позволяет подключить шапку к любому веб-проекту и настроить так, как вам нужно.

Всё выглядит и настраивается так же, как в компоненте [Header]((https://header-consta.vercel.app/?path=/docs/components-header--playground)).

> `header-umd` — адаптивный компонент, он подстраивается под ширину экрана и подходит для мобильных устройств


# Как использовать

У вас несколько вариантов подключения:

1. установить и импортировать npm-пакет,
2. подключить скрипт на страницу.

Вы можете подключить модуль удобным способом и прописать настройки. Все свойства идентичны свойствам компонента `Header` из пакета `@consta/header`.

[Посмотреть документацию и примеры](https://header-consta.vercel.app/?path=/docs/components-header--playground)

## npm-пакет

Этот вариант подходит, если вы можете включить проект в сборку.

```sh
# NPM
$ npm install @consta/header-umd

# Yarn
$ yarn add @consta/header-umd
```

```ts
import { constaHeaderInit } from '@consta/header-umd';
import '@consta/header-umd/styles.css';

const set = constaHeaderInit(
  {
    logo: 'Logo',
    style: { width: '100%' },
    className: 'my-classname',
    menu: [{ label: 'ddd', onClick: () => set({ menu: [{ label: 'ddd2' }] }) }],
    languages: [{ label: 'ru' }, { label: 'en' }],
  },
  document.getElementById('root'),
);
```

## Подключение скрипта

Этот вариант подходит, если у вас есть веб-проект, на страницу которого вы можете подключить скрипт.

Последний собранный скрипт и стили можно скопировать из папки [`dist`](https://github.com/consta-design-system/header-umd/tree/master/dist) в этом репозитории.

```html
<script src="./path/to/index.js"></script>
<link href="./path/to/styles.css" rel="stylesheet" />
<script>
  window.onload = function () {
    var set = constaHeaderInit(
      {
        logo: 'Logo',
        style: { width: '100%' },
        className: 'my-classname',
        menu: [{ label: 'ddd', onClick: () => set({ menu: [{ label: 'ddd2' }] }) }],
        languages: [{ label: 'ru' }, { label: 'en' }],
      },
      document.getElementById('root'),
    );
  };
</script>
```

## Разработка

### Подготовка окружения

Чтобы установить зависимости, выполните команду:

```sh
$ yarn install
```

### Основные команды

```sh
# Сборка и старт
$ yarn start

# Сборка для production
$ yarn build

```

## Контрибьюторам

Будем рады, если вы захотите принять участие в разработке дизайн-системы =) Но сначала прочитайте [инструкцию для контрибьюторов](https://consta-uikit.vercel.app/?path=/docs/common-develop-contributors--page).

## Лицензия

Дизайн-систему можно использовать бесплатно, она распространяется ПАО «Газпром нефть» на условиях открытой [лицензии MIT](https://consta.gazprom-neft.ru/static/licence_mit.pdf).
