# Simple template with React, Express, Typescript

Install yarn, then:

To run in dev environment, run the following command

```
yarn dev
```

When you run it for the first time you will get an error from nodemon, because the server.js file isn't bundled yet. You can simply ignore the error.

To build for production, run:

```
yarn build
```

When you build a server.js for production, the public folder should be in the same directory that you start your server from.

When you run the server.js that's built for production, you should add "-r dotenv/config" as a command line argument like in the following code block:

```
node server.js -r dotenv/config
```

Or import the dotenv package as soon as possible in your entry file and invoke the config function on the object like this:

```
import * as dotenv from 'dotenv';
dotenv.config();
```

or

```
import { config } from 'dotenv';
config();
```

This project also uses the following packages:

- [dotenv]("https://www.npmjs.com/package/dotenv"), for env variables
- [styled-components]("https://www.npmjs.com/package/styled-components"), for scoped styles for React components
- [sass]("https://www.npmjs.com/package/sass"), as the css preprocessor
