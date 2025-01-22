# Controlled Forms

Forms -> Inputs for your user

There are multiple ways to make forms work in React, this way (controlled forms) always works -> think like `for (let i = 0; ...)`

- Controlled Form (\*) -> learn this 1st
- Uncontrolled Form
- Form Submit

## Forms

- buttons
- inputs -> numbers, text, date etc
- labels -> accessible
- select + options

## Virtual DOM

React -> Virtual DOM (memory)

`let count = 1` -> change count to `2`

vs

`<p>Count: 1</p>` -(react updates DOM) -> `<p>Count: 2</p>`

## How to make controlled forms

1. Create the state to save the input -> `useState()`
2. Put the state into the input -> `value={}` -> result in unusable form
3. Create the `handleChange()` and link to the input -> `onChange`
4. Inside the handler -> setState -> `setState()`

## Important

Want changes in the DOM -> have to modify the props / state -> React re-render

If the changes in DOM are not what you want -> you made a mistake in the render

React -> Component(props, state) -> JSX (Declartion)

## Validation

This is very important, we start checking in Project 2 onwards
