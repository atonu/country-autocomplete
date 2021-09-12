import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable, Subject, Subscription} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {TranslateService} from '@ngx-translate/core';
import * as countries from './country seeds/EN'

@Component({
  selector: 'app-country-autocomplete',
  templateUrl: './country-autocomplete.component.html',
  styleUrls: ['./country-autocomplete.component.scss']
})
export class CountryAutocompleteComponent implements OnInit {
  myControl = new FormControl();
  options: any;
  filteredOptions: Observable<any[]> | undefined;

  @Output() country = new EventEmitter();
  @Input() countryCode: string = '';
  @Input() disabled: boolean = false;
  @Input() customLabel: string = '';
  @Input() customErrorMsg: string = '';
  @Input() customPlaceholder: string = '';
  @ViewChild('country', {static: false}) countrySearch: { nativeElement: { focus: () => void; }; } | undefined;
  error: boolean = false;
  static countryChangeWatcher$ = new Subject<any>();
  selectedCountry: String = '';
  private ENcountrylist: any = [];
  countries = countries.countryList.countries

  constructor(
    private translateService: TranslateService
  ) {
    translateService.addLangs(['en-US', 'de-DE', 'fr-FR', 'it-IT']);
    translateService.setDefaultLang('en-US');
    const browserLang = translateService.getBrowserLang();
    translateService.use(browserLang.match(/fr|fr-FR/) ? 'fr-FR' : 'en-US');
  }

  ngOnInit() {
    this.ENcountrylist = countries.countryList.countries;
    if (this.countryCode && this.countryCode !== '') {
      if (this.countryCode.length <= 2) {
        this.countryCode = this.ENcountrylist.filter((option: any) =>
          option.Code.includes(this.countryCode))[0] ? this.ENcountrylist.filter((option: any) => option.Code.includes(this.countryCode))[0].Code : 'CH';
      } else {
        this.countryCode = this.ENcountrylist.filter((option: any) =>
          option.Name.includes(this.countryCode))[0] ? this.ENcountrylist.filter((option: any) => option.Name.includes(this.countryCode))[0].Code : 'CH';
      }
    }
    /*if (this.translateService.getBrowserLang() === 'de-DE') {
      this.options = DEcountrylist.DEcountrylist;
    } else if (this.currentLang === 'fr') {
      this.options = FRcountrylist.FRcountrylist;
    } else if (this.currentLang === 'it') {
      this.options = ITcountrylist.ITcountrylist;
    } else {
      this.options = countries;
    }*/
    this.options = countries.countryList.countries;
    if (this.countryCode && this.countryCode !== '') {
      this.selectedCountry = this.options.filter((option: any) =>
        option.Code.includes(this.countryCode))[0] ? this.options.filter((option: any) => option.Code.includes(this.countryCode))[0].Name : '';
    }


    CountryAutocompleteComponent.countryChangeWatcher$.subscribe(country => {
      this.selectedCountry = country;
    });

    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => {
          return this._filter(value);
        })
      );
  }

  setCountry(country: any) {
    this.selectedCountry = country.Name;
    let emitPayload = {
      Name: '',
      Code: country.Code
    };
    emitPayload.Name = this.ENcountrylist.filter((option: any) =>
      option.Code.includes(country.Code))[0] ? this.ENcountrylist.filter((option: { Code: string | any[]; }) => option.Code.includes(country.Code))[0].Name : '';
    this.country.emit({
      value: emitPayload
    });
  }

  removeCountry() {
    this.selectedCountry = '';
    this.myControl.setValue('');
    this.country.emit({
      value: false
    });

    setTimeout(() => {
      // @ts-ignore
      this.countrySearch.nativeElement.focus();
    }, 100);
  }

  static getCountryChangeWatcher() {
    return this.countryChangeWatcher$;
  }

  private _filter(value: string): any[] {
    let filterValue = '$';
    if (value) {
      filterValue = value.toLowerCase();
    }
    return this.options.filter((option: any) => option.Name.toLowerCase().includes(filterValue));
  }

}
