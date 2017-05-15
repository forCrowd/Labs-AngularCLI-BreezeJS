# Angular CLI & BreezeJS

An example project that uses both Angular CLI & BreezeJS.

### Details

In order to run BreezeJS in a Angular CLI project, "breeze" library had to be modified in two places:

* package.json: Value of `main` property was updated from `breeze.debug.js` to `breeze.base.debug.js`.

Otherwise, Angular CLI loads `breeze.debug.js`, which contains the whole library.

* breeze.base.debug.js: In `__requireLibCore` function, the following line was commented out.

      var window = global.window;
    
Somehow `global` variable contains an empty object in this setup (related with `tsconfig.json` uses `module: es2015`?).

On the other hand, `window` global variable itself is already available, so disabling this line allows the function to make the necessary checks in the following lines.

To run the application, you can just `ng serve` command.

### Fixed & Original Packages

Modified library is located under `node_modules-fixed` folder, and configured in `tsconfig-fixed.json` & `src\tsconfig.app.json` files.

To see the result with original package, update `src\tsconfig.app.json` file by replacing

    "extends": "../tsconfig-fixed.json",
      
with 

    "extends": "../tsconfig.json",

During the application load, it should display this error message in the console:

    Unable to initialize OData.  Needed to support remote OData services

### Changelog

**1.0.0**

* Initial version
