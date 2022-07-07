import { Component } from '@angular/core';
import { InfoManagerService } from './services/info-manager.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private info: InfoManagerService) {
    info.getAllCountries()
  }
}
