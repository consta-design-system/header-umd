# [Дизайн-система Consta](http://consta.gazprom-neft.ru/) | header-umd

Уневерсальный модуль компонента `Header`, для проектов не на `ReactJS`

# Как использовать

У вас несколько вариантов подключения:

1. использовать npm-пакет
2. подключение скрипта на страницу

## npm-пакет

```sh
# NPM
$ npm install @consta/header-stack-free

# Yarn
$ yarn add @consta/header-stack-free
```

```ts
import { constaHeaderInit } from '@consta/header-stack-free';
import '@consta/header-stack-free/styles.css';

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

последний собранный скрипт и стили находятся в папке `dist` этого репозитория

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

## Документация

Все свойства идентичны свойствам компонента `Header` из пакета `@consta/header`

[Посмотреть документацию и примеры](https://header-consta.vercel.app/?path=/docs/components-header--playground)

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
