### create-react-app

Every iframe needs a title attribute supplied to it, this is a required plugin.

### react-router

There is a hidden 'match' parameter passed through props when using a component render

```js
<Route path='/:id' component={Component}/>
//follow link to '/bonobo'
...
function Component({match}){
  //match == 'bonobo'
  return(<div>{match}<div>);
}
```

***this match prop does not exist when using the 'render' parameter.***

### react-materialize with create-react-app

More than an yarn add, must add css stylesheet link, and jQuery script etc. to index.html file to work.

```html
<head>
  <meta charset="utf-8" />
  <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css">
  <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1, shrink-to-fit=no"
  />
  <meta name="theme-color" content="#000000" />
  <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
  <title>React App</title>
</head>
<body>
  <noscript>You need to enable JavaScript to run this app.</noscript>
  <script src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/js/materialize.min.js"></script>
  <div id="root"></div>
</body>
```
