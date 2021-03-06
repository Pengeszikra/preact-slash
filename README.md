# PREACT-SLASH
Tiny useReducer / jsx element naming oriented preact helper library.
[react based counterpart](https://github.com/Pengeszikra/react-slash)

**Highlights:**
- Multiple div factory from classNames, with hook like naming
- multiple element factory from classNames (custom factory)
- css -> jsx naming layer
- Single stepp action constans and object definition
- Custom hook return actions calls include dispatch
- Unify action object
- Prevent overclick
- show on/of capable hof

## Usage
```npm install preact-slash```

### divFactory
```jsx
  import { divFactory } from 'preact-slash';
  const [FooHolder, FooButton] = divFactory('foo-holder, foo-holder_button');

  return (
    <FooHolder>
      <FooButton>Foo Button</FooButton>
    </FooHolder>
  );
```

### factory
```jsx
  import { factory } from 'preact-slash';
  const [FooSection, FeeSection] = factory(<section />, 'foo-section', 'fee-section');

  return (
    <FooSection>content of foo</FooSection>
  );

  // <section class="foo-section">content of foo</section>
```

### actionCreator
```jsx
  import { actionCreator } from 'preact-slash';
  const [FOO_ACTION, fooAction] = actionCreator('foo-action');

  const fooReducer = (state, {type, payload}) => {
    switch (type) {
      case FOO_ACTION: return {...state, foo: payload};
    }
```

### useReducerActions
```jsx
  import { useReducerActions } from 'preact-slash';
  const {state, fooAction} = useReducerActions(fooReducer, fooInitialState, {fooAction});
```

### noprop
```jsx
  import { noprop } from 'preact-slash';
  const clickFoo = noprop(fooAction);

  return <div onClick={clickFoo} />;
```

### showtime
```jsx
  import { showtime } from 'preact-slash';
  const FooComponent = showtime(RootOfFooComponent);

  return <FooComponent show={true} />
```

## preact-slash programming example

```jsx
import { render, h } from 'preact';
import { divFactory, actionCreator, useReducerActions, factory } from 'preact-slash';

const [INC_COUNTER, incCounter] = actionCreator('inc-counter');
const [DEC_COUNTER, decCounter] = actionCreator('dec-counter');

const fooActions = {
  incCounter,
  decCounter,
}

const initialState = {
  counter: 0;
}

const fooReducer = (state, {type, payload}) => {
  switch (type) {
    case INC_COUNTER: return {...state, counter: state.counter + 1};
    case DEC_COUNTER: return {...state, counter: state.counter - 1};
    default: return state;
  }
}

export default props => {
  const {state, incCounter, decCounter} = useReducerActions(fooReducer, initialState, fooActions);
  const {counter} = state;

  const [SlashCounterFrame] = factory(<main />, 'slash-frame');
  const [Counter, CounterUpButton, CounterDownButton] = 
    divFactory('slash-counter', 'slash-counter--up', 'slash-counter--down');

  return (
    <SlashCounterFrame>
      <Counter>{counter}</Counter>
      <CounterUpButton onClick = {incCounter} />
      <CounterDownButton onClick = {decCounter} />
    </SlashCounterFrame>
  );
}
```

*- KIHAL -*