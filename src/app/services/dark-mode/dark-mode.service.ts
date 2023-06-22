import { Injectable } from '@angular/core';
// import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {
  private enabled$: BehaviorSubject<boolean>;
  constructor(
    // private cookieService: CookieService
  ) {
    // this.enabled$ = new BehaviorSubject(cookieService.get('allogyDarkMode') === 'true');
    this.enabled$ = new BehaviorSubject<boolean>(false);
  }

  get mode(): Observable<boolean> {
    return this.enabled$.asObservable();
  }

  setMode(bool: boolean) {
    // this.cookieService.set('allogyDarkMode', bool.toString(), null, '/', null, null, 'Lax');
    return this.enabled$.next(bool);
  }
}
