import {Component} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {CountryAutocompleteComponent} from "./country-autocomplete/country-autocomplete-component/country-autocomplete.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'country-autocomplete';

  showSelectedCountry = ""
  showSelectedCountryCode = ""
  browserLang: any
  languages = [
    {'key': 'EN', 'value': 'en-US'},
    {'key': 'DE', 'value': 'de-DE'},
    {'key': 'FR', 'value': 'fr-FR'},
    {'key': 'IT', 'value': 'it-IT'}
  ]
  show: boolean = false;

  constructor(
    private translateService: TranslateService
  ) {
    translateService.addLangs(['en-US', 'de-DE', 'fr-FR', 'it-IT']);
    translateService.setDefaultLang('en-US');
    this.browserLang = translateService.getBrowserLang();
    translateService.use(this.browserLang.match(/fr|fr-FR/) ? 'fr-FR' : 'en-US');
  }

  countrySelected($event: any) {
    this.showSelectedCountry = $event.value.Name
    this.showSelectedCountryCode = $event.value.Code
  }

  changeLanguage(lang: any) {
    debugger
    this.translateService.use(lang.value);
    this.browserLang = lang.key
  }

  setCountryToCountryAutoComplete(countryCode: string) {
    CountryAutocompleteComponent.getCountryChangeWatcher().next(countryCode)

    //changing data in app-component
    this.showSelectedCountryCode = countryCode
    this.showSelectedCountry = "United kingdom"

  }
}
