# Todo Tutorial

## Book

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Debug

1. Upgrade node version to v14.17.0 from v14.16.0

```bash
npm run dev
# or
yarn dev
```

## Dependencis

1. `Styled-Components`

- styled-components
- @types/styled-components

2. `ESLint`

- eslint
- eslint-config-airbnb
- eslint-plugin-import
- eslint-plugin-jsx-a11y
- eslint-plugin-react
- eslint-plugin-react-hooks
- @typescript-eslint/eslint-plugin
- @typescript-eslint/parser

3. `TypeScript`

- typescript
- @typescript-eslint/eslint-plugin
- @typescript-eslint/parser

4. `SVG` to NextJS

- [more info](https://frontend-digest.com/how-to-import-svgs-into-nextjs-8ec6100e613f)
- babel-plugin-inline-react-svg

```bash
file: .babelrc

{
  "plugins": ["inline-react-svg"]
}

```

5. `Redux`

- redux
- react-redux
- next-redux-wrapper
- redux-devtools-extension
- @types/react-redux

## cURL

```bash
$ curl --request PATCH http://localhost:3001/api/todos/1

Head Request
$ curl --request PATCH -I http://localhost:3001/api/todos/1
```
