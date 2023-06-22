import { Component } from '@angular/core';
import { faBars, faThLarge } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  icons = {
    menu: faBars,
    nav: faThLarge
  };
  title = 'dummy-theme';
}
