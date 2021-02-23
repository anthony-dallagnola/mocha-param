# Mocha param
Forked from https://github.com/mikejsdev/mocha-param.git
## Parameterized tests for Mocha.

```
npm install --save-dev mocha-it-each
```

## Usage

```TypeScript

import { itEach } from 'mocha-it-each';
import { expect } from 'chai';

describe('test with parameters', function() {
  itEach('test with value ${value}', [0,1,2], function(value) {
    expect(typeof value).to.equal(typeof Number());
  });
});

```

only and skip can be used same as it