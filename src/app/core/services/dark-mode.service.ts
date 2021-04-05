import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DarkModeService {
  private darkModeSubject = new ReplaySubject<boolean>(1);

  constructor() {}

  getDarkModeUpdates(): Observable<boolean> {
    return this.darkModeSubject.asObservable();
  }

  setDarkMode(isDarkMode: boolean): void {
    this.darkModeSubject.next(isDarkMode);
  }
}
