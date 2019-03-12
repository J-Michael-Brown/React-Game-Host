### create-react-app

Every iframe needs a title attribute supplied to it, this is a required plugin.

### redux

rootReducer wants to have returns that are _just the **value** you are changing_ (not even the key)

```js
//reducer should look like this
function contentInfoListReducer(state = {}, action){
  let newContentInfoList;
  switch (action.type) {
    case 'GET_CONTENT_LIST':
      newContentInfoList = action.contentInfoList;
      return newContentInfoList; // returning only the value
    default:
      return state;
  }
}
```

```js
//notice how we set the contentInfoList property to the reducer
const rootReducer = combineReducers({
  contentInfoList: contentInfoListReducer
});
```
---

to route normally with react-router, you need only the Router component (HashRouter in this case) and the `<Switch><Route/></Switch>`. **But** once you introduce redux into the application, the component(s) containing the Route list need to be exported with router

```js
export default withRouter(connect(mapStateToProps)(App));
```

without this code the page will be unresponsive to route links using any of the Link type of components from the react-router-dom library.

### react-router

There is a hidden 'match' parameter passed through props when using a component render

```js
<Route exact path='/:id' component={Component}/>
//follow link to '/bonobo'
...
function Component({match}){
  //match == 'bonobo'
  return(<div>{match}<div>);
}
```

***this match prop does not exist when using the 'render' parameter.***

## react

To grab the input value you _must_  event.preventDefault _first_.

```js
...
handleNewContentFormSubmission({ _contentName, event }){
  event.preventDefault();
  _contentName.state.value;
}

render(){
  let _contentName = null;
  return(
    <div>
    <form onSubmit={(event)=>{this.handleNewContentFormSubmission({event: event, _contentName: _contentName})}}>
      <Row>
        <Input s={12} label="Content Name" ref={(input) => {_contentName = input;}} />
      </Row>
      <Button waves='light'>Submit</Button>
    </form>
    </div>
  )
}
...
```

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
