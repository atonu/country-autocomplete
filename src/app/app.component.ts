import {Component} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

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
    this.translateService.use(lang.value);
    this.browserLang = lang.key
  }
}
