## Note

Project in mid development. Structure will likely change.

## Problems

**[HashRouter](#hash-router)**

### HashRouter

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

the getElementById was looking for 'react-app-root' but should have looked for 'root'.

The site I visited didn't point out the problem, but it provided a much simpler app which allowed me to figure out the problem with the render.

### Component Render

Within the `<PlayGame/>` I want to render the component from a game component.

I, evidently, cannot simply write it as {game.component} in the return of my react component. I've tried a couple other things (<{game.component}/>) but this bug seems to be a little more intensive than a slight syntax error.

#### Trying out

i frames to fix problem potentially

import component from GitHub instead of downloading it into my project.
