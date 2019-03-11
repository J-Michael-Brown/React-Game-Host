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
