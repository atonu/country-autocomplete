import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'country-autocomplete';

  showSelectedCountry = "Bangladesh"
  showSelectedCountryCode = "BD"

  countrySelected($event: any) {
    this.showSelectedCountry = $event.value.Name
    this.showSelectedCountryCode = $event.value.Code
  }
}
