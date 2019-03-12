## Note

Want to try out pulling React components from GitHub as an import, would be a lot dryer, but require internet connection (and async code).

Need to check out file uploads otherwise, and parsing that info could get messy.

After looking into flash player, I've come to realize that a great deal of the information about it is out of date, and that many platforms no longer support flash automatically. It is because of flash not being nice to work with even while it is functioning that I have decided that using it would lead to a worse overall user experience.   
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; I have decided to use iframe components to simply access a deployed site. moving forward, the example will be my intro group project (the only game type of thing I have deployed).    
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; This will allow me to focus more heavily on the organization and display of content without spending excess time on getting lost within an outdated framework.

## Problems

**[HashRouter](#hash-router)**    
**[Component Render](#component-render)**
**[Non Responsive Routing](#non-responsive-routing)**

### Non Responsive Routing

Clicking on a link to switch routes is not working (issue introduced alongside redux implementation).

#### Solution

Wrapping the export connection within the withRouter function

```js
export default withRouter(connect(mapStateToProps)(App));
```

### HashRouter

`<HashRouter></HashRouter>` not being recognized

#### Searching

After searching for about an hour, I found a promising lead here:    
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

#### Solution

scoping the React.Component in the assets file was what I needed to do, rather than only trying to scope it in the PlayGame Component file, otherwise react doesn't know what I pulled from the assets file.
