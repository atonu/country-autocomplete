# CountryAutocomplete

This is a tool to easily search / auto complete and translate a list of countries in an angular project.
This module is made to easily interract with forms in an angular project. This will emit country code and name to be used in angular components as well as take country code / name as input for viewing a selected country inside a mat chip. The purpose of this project is to save development time for building a country search and select tool, which is quite commonly used.

## Setup

import the `CountryAutocompleteModule` in the module you are working with:
`import {CountryAutocompleteModule} from "..path";`

`CountryAutocompleteModule` has a translations module integrated, that works with the translation files inside `./assets`.

import the component and use the selector from the component's html.
`<app-country-autocomplete></app-country-autocomplete>`

The attributes inside the selector are listed below.

    Variable              Type            Use

    [countryCode]         string          Pass a country code/Country Name to set a default value. I.e: 'DE' / 'Germany'
    (country)             EventEmitter    Returns the selected country as event emitter back to the component. Usable to patch value to forms and other functionalities.
    [disable]             boolean         Disables component
    [customPlaceholder]   string          Passes a custom placeholder. Send language key and add the key inside language files (json) if necessary.
    [customErrorMsg]      string          Passes a custom error message. Send language key and add the key inside language files (json) if necessary.
    [customLabel]         string          Passes a custom label. Send language key and add the key inside language files (json) if necessary.

## Examples 
`CountryAutocompleteComponent` has been implemented inside the AppComponent in this project. Flags are shown for visual aesthetics.

## Thanks to
Special thanks to Hampus Borgos. I took assets from the repository https://github.com/hampusborgos/country-flags. here all rights reserved by Hampus Borgos

## Running project
Install dependencies by running `npm i` in terminal.
In terminal  run `ng serve` to start run the project.
