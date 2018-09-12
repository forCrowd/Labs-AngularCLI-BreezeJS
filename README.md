# Angular CLI & BreezeJS OData Example

An example project that works with Angular CLI & BreezeJS with OData adapter

Angular version: 6.1.7  
BreezeJS version: 1.7.1

### Setup & Run

After installing npm packages with `npm install`, call `ng serve` command to run the application

### OData adapter fix

Out of the box, OData adapter fails to load with the following error message:

    Unable to initialize OData.  Needed to support remote OData services

The issue is related with `global` object being empty, which is used in `\breeze-client\breeze.debug.js` file, `__requireLibCore` function:

    Line 424: var window = global.window;
    
Since `window` variable itself is already available in that context, commenting out this line solves the problem.

`breeze-client-odata-fix.ts` file was introduced that overrides `__requireLibCore` and its parent `requireLib` functions, and being imported before using `breeze-client` library in `app.module`

    Line 5: import "./breeze-client-odata-fix";
    
The issue on BreezeJS repository:  
https://github.com/Breeze/breeze.js/issues/221

### Changelog

**2.0.0**

* Package upgrades: Angular 6.1.7, BreezeJS 1.7.1
* "node-modules-fixed" folder approach was replaced with "breeze-client-odata-fix.ts" file

**1.0.0**

* Initial version
