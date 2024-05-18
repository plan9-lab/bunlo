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
bun i git@github.com:plan9-lab/bunlo.git
```

or for a specific version:

```bash
bun i git@github.com:plan9-lab/bunlo.git#0.0.2
```

```typescript
import { Bunlo } from "bunlo";

const bunlo = new Bunlo("server");

bunlo.log("hello world");
```

To test:

```bash
bun test
```
