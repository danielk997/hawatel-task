import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  preLoader: boolean | undefined;

  onActivate(event: any) {
    this.preLoader = true;
    setTimeout(() => {
      this.preLoader = false;
    }, 1000);
  }
}
