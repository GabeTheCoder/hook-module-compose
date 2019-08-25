# Grind JSX

Grind JSX is a thing. Gonna put info here soon and make a readme that doesn't suck. Also to be fair, this is WIP AF at this point. 

## Installation

You should know this. If not though, it's `npm install grind-jsx`.

## Usage

### Migrating React Components

```
/* @jsx grind */

import grind from 'grind-jsx';

const TestComponent = props => {
    return <div className="TestComponent" />
};

export default TestComponent;
```

### Render In React Component

```
import { renderIn } from 'grind-jsx';

useEffect(() => {
    renderIn(ref.current, TestComponent, props);
});
```