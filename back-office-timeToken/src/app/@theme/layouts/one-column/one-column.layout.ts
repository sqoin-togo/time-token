import { Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators';

// TODO: move layouts into the framework
@Component({
  selector: 'ngx-one-column-layout',
  styleUrls: ['./one-column.layout.scss'],
  template: `
    <nb-layout>
      <nb-layout-header fixed>
        <ngx-header></ngx-header>
      </nb-layout-header>

      <nb-sidebar class="menu-sidebar" tag="menu-sidebar" responsive>
              <ng-content select="nb-menu"></ng-content>
      </nb-sidebar>

      <nb-layout-column>
        <ng-content select="router-outlet"></ng-content>
      </nb-layout-column>

      <nb-layout-footer fixed>
        <app-footer></app-footer>
      </nb-layout-footer>
    </nb-layout>
  `,
})
export class OneColumnLayoutComponent implements OnDestroy {

  private alive = true;

  currentTheme: string;

  constructor(protected themeService: NbThemeService) {
    this.themeService.getJsTheme()
      .pipe(takeWhile(() => this.alive))
      .subscribe(theme => {
        this.currentTheme = theme.name;
    });
  }

  ngOnDestroy() {
    this.alive = false;
  }
}