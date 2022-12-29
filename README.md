# ToDoUI

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Issue Fixed

# Bootstap Install issue:
Skipping installation: Package already installed
Cannot find module 'C:\Matrix\toDoAPI\node_modules\@schematics\angular\utility\test.js'

Solution:
 npm uninstall @schematics/angular
 npm uninstall ngx-bootstrap
 npm install @schematics/angular@9.1.0 
 ng add ngx-bootstrap

 
*for Issue- "Package "ngx-bootstrap" was found but does not support schematics."
    --npm install ngx-bootstrap@latest --legacy-peer-deps 