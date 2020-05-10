![CI](https://github.com/yokejs/core-env/workflows/CI/badge.svg)

# [Yoke.js Env](https://github.com/yokejs/core-env)

Yoke.js Env provides a simple and safe way to access environment variables
in Node.js.

## Installation

`$ yarn add "@yokejs/core-env"`
or
`$ npm install "@yokejs/core-env"`

## Usage

### Retrieving an environment variable

```
import Env from '@yokejs/core-env'

const env = Env()

// Retrieve an environment variable safely
env.get('NODE_ENV')

// Retrieve an environment variable with a default value fallback
env.get('NODE_ENV', 'local')
```

## License

Yoke.js Env is open-sourced software licensed under the
[MIT](https://opensource.org/licenses/MIT) License.
