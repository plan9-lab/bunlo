# Bunlo

A simple typescript logger for Bun.

- Colored logging
- Logging to file
- Logging to console
- Logging to database (Mongo, MySQL, PostgreSQL)
- Webserver for accessing logs

## Usage

To install dependencies:

```bash
bun i
```

```typescript
import { Bunlo } from 'bunlo'

const bunlo = new Bunlo('server')

bunlo.log('hello world')
```

To test:

```bash
bun test
```