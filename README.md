# CountryAutocomplete

This is a tool to easily search/auto complete and translate a list of countries in an angular project.
This module is made to easily interract with forms in an angular project. This will emit country code and name to be used in angular components.

## Setup

import the 'CountryAutocompleteModule' in the module you are working with:
import {CountryAutocompleteModule} from "path";

CountryAutocompleteModule has a translations module setup, that works with the translation files inside /assets.

import the component and the selector
"<app-country-autocomplete></app-country-autocomplete>"

the attributes are listed below.

variable              type            Use

[countryCode]         string          Pass a country code/Country Name to set a default value. I.e: 'DE' / 'Germany'
(country)             EventEmitter    returns the selected country as event emitter back to the component. Usable to patch value to forms and other functionalities.
[disable]             boolean         disables component
[customPlaceholder]   string          Pass a custom placeholder. Send language key and add the key inside language files (json) if necessary.
[customErrorMsg]      string          Pass a custom error message. Send language key and add the key inside language files (json) if necessary.
[customLabel]         string          Pass a custom label. Send language key and add the key inside language files (json) if necessary.


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

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
