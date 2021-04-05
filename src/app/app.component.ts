import { Component, OnInit, Renderer2 } from '@angular/core';
import { DarkModeService } from '@core/services/dark-mode.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'rest-countries';

  constructor(private darkModeService: DarkModeService, private renderer: Renderer2) {}

  ngOnInit(): void {
    // we don't need to unsubscribe to this on destroy since AppComponent will never be destroyed
    this.darkModeService.getDarkModeUpdates().subscribe((isDarkMode) => {
      if (isDarkMode) {
        this.renderer.addClass(document.body, 'dark-mode');
      } else {
        this.renderer.removeClass(document.body, 'dark-mode');
      }
    });
  }
}
