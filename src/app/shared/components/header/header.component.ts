import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { DarkModeService } from '@core/services/dark-mode.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit, OnDestroy {
  darkMode = false;

  private unsubscribe: Subject<any> = new Subject();

  constructor(private darkModeService: DarkModeService) {}

  ngOnInit(): void {
    this.darkModeService
      .getDarkModeUpdates()
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((isDarkMode) => {
        this.darkMode = isDarkMode;
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.unsubscribe();
  }

  onClickDarkModeToggle(): void {
    this.darkModeService.setDarkMode(!this.darkMode);
  }
}
