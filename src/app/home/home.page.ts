import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Import the Router service

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {} // Inject the Router service
  sayHello() {
     alert('Hello!');
    this.router.navigateByUrl('second-page');

  }

}
