import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.page.html',
  styleUrls: ['./second-page.page.scss'],
})
export class SecondPagePage implements OnInit {
  items: { name: string, imageUrl: string }[] = [
    { name: 'Item 1', imageUrl: '../../assets/images/MicrosoftTeams-image (1).png' },
    { name: 'Item 2', imageUrl: '../../assets/images/MicrosoftTeams-image (1).png' },
    { name: 'Item 3', imageUrl: '../../assets/images/MicrosoftTeams-image (1).png' }
  ];
  constructor() { }

  ngOnInit() {
  }

}
