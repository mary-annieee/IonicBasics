import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Import the Router service

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  items: { name: string }[] = [
    { name: 'Item 1' },
    { name: 'Item 2' },
    { name: 'Item 3' }
  ];


  constructor(private router: Router) {} // Inject the Router service
  sayHello() {
     alert('Hello!');
    this.router.navigateByUrl('second-page');

  }

}
