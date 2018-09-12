# Angular CLI & BreezeJS OData Example

An example project that works with Angular CLI & BreezeJS with OData adapter

Angular version: 6.1.7  
BreezeJS version: 1.7.1

### Details

Current version works out of the box, by using a fix for OData adapter.

* breeze.debug.js: In `__requireLibCore` function, the following line was commented out.

      var window = global.window;
    
Somehow `global` variable contains an empty object in this setup (related with `tsconfig.json` uses `module: es2015`?).

On the other hand, `window` global variable itself is already available, so disabling this line allows the function to make the necessary checks in the following lines.

In order to make "OData" adapter work, "breeze-client-odata-fix" ts had to be introduced.


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

**2.0.0**

* Package upgrades: Angular 6.1.7, BreezeJS 1.7.1
* "node-modules-fixed" folder approach was replaced with "breeze-client-odata-fix.ts" file

**1.0.0**

* Initial version
