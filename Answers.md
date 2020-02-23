1. What problem does the context API help solve?

It mainly tries to solve and minimize prop drilling. 

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

The store holds overall application state, not specific to a single component. It initializes state using a reducer. The reducer returns new state based on actions passed in. Actions are functions which return an object with a type and sometimes payload property. The store is known as the single source of truth because state is stored and modified within it. 

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is state shared among different components within an application. This includes state which more than one component needs access to. Component state is specific to and applicable only within a particular component. If various components need access to the same piece of state, it should probably be stored via application state. Something like controlling an input can be done locally, since we wouldn’t want the reducer to run with every keystroke.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux-thunk allows us to write a function which returns a function. It allows the actions to happen asynchronously.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

Context is simpler and more applicable to what we've done thus far. Redux would be better for real-world application.