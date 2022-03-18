# [prisma-12355](https://github.com/prisma/prisma/issues/12355)

```
npm install
npm run migrate
npm run build
npm start <-- runs as expected. fk constraint error is thrown.
npm run esbuild
npm run start:esb <-- hangs :(
```