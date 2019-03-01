## Note

Project in mid development. Structure will likely change.

## Problems

`<HashRouter></HashRouter>` not being recognized

#### Searching

Found a promising lead after about an hour here:    
https://facebook.github.io/create-react-app/docs/adding-a-router

#### Solution

Turns out the error was pointing to a strange place

```js
...
const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <HashRouter> // <-- pointing here
        <Component />
      </HashRouter>
    </AppContainer>,
    document.getElementById('react-app-root')
  );
};
...
```

But the issue was on the document id

```js
...
const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <HashRouter>
        <Component />
      </HashRouter>
    </AppContainer>,
    document.getElementById('react-app-root')// <-- actual issue
  );
};
...
```

The site I visited didn't point out the problem, but it provided a much simpler app which allowed me to figure out the problem with the render.
