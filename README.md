React + Redux + ES6 Boilerplate
====
I don't want to setup a new application from scratch everytime I start a new project using React + Redux + ES6 + Hot Reloading + Webpack + ESLINT so I decided to create this boilerplate project.

This project was heavily inspired in [hjs-webpack](https://github.com/HenrikJoreteg/hjs-webpack) that makes webpack configuration nice and easy.

## Requirements
1. Node
2. You'll need to have `npm > 3.x.x` installed on your system.

## Usage

For example, you can import redux anywhere you want just by doing:
```js
import redux from 'redux'
```

If you want to import a component that's not on the same folder you can do something like: 

```js
import MyComponent from '~/components/foo/MyComponent'
```

instead of

```js
import MyComponent from '../../../foo/MyComponent'
```


For development:

1. `git clone https://github.com/alejandronanez/redux-react-boilerplate ./your-project-folder`
2. `npm install`
3. `npm start` -> Starts a server on `http://localhost:3000/`

Build your project:

1. `npm run build`

## License
MIT [Alejandro Nanez](https://github.com/alejandronanez)

## Contribute
Feel free to fork this repo and send your PR's
