import { Component, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { Location } from '@angular/common'; 




@Component({
  selector: 'app-nb-auth',
  templateUrl:'./authentification.component.html',
  styleUrls: ['./authentification.component.scss'],
})
export class NbAuthComponent implements OnDestroy {

  private destroy$ = new Subject<void>();

  subscription: any;

  authenticated: boolean = false;
  token: string = '';

  // showcase of how to use the onAuthenticationChange method
  constructor(protected location: Location) {

  
  }

  back() {
    this.location.back();
    return false;
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
