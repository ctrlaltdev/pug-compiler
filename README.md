[![npm](https://img.shields.io/npm/v/pugcompiler.svg?style=flat-square)](https://www.npmjs.com/package/pugcompiler)
[![licence](https://img.shields.io/npm/l/pugcompiler.svg?style=flat-square)](https://github.com/ctrlaltdev/pug-compiler/blob/master/LICENCE.md)
[![GitHub tag](https://img.shields.io/github/tag/ctrlaltdev/pug-compiler.svg?style=flat-square)](https://github.com/ctrlaltdev/pug-compiler/tags)
[![GitHub release](https://img.shields.io/github/release/ctrlaltdev/pug-compiler.svg?style=flat-square)](https://github.com/ctrlaltdev/pug-compiler/releases)
[![I love badges](https://img.shields.io/badge/I%20love-badges-FF00FF.svg?style=flat-square)](https://shields.io)

### Deprecated

Pugjs has their own pug CLI that does that: https://github.com/pugjs/pug-cli / https://www.npmjs.com/package/pug-cli

### Pug Compiler
A simple [`pug`](https://pugjs.org) file compiler. Tired of writing markup the long way? Write your pug, compile to html, and voilà.

installation
``` sh
npm install -g pugcompiler
```

create a folder

    + myfolder/
      - pug/
        - index.pug
      - example.css
      - example.js

usage
``` sh
pugcompiler path/to/myfolder/pug
```

And voilà. your html is in place in the ./html/ directory.

The path argument is optional, if not present, it will default to './pug/'.
If you have directories inside the folder containing your pug files, you might want to use the -R flag: `pugcompiler -R`

If you want your html to be compiled elsewhere than ./html/ you can specify it with -o flag: `pugcompiler -o ./my/other/folder`
