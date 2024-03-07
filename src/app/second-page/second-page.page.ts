import { Component, OnInit } from '@angular/core';
import { ActionSheetController, Platform } from '@ionic/angular';

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
  constructor(private actionSheetController: ActionSheetController) { }
  async openMenu() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Options',
      buttons: [{
        text: 'Option 1',
        handler: () => {
          alert('Option 1 clicked');
        }
      }, {
        text: 'Option 2',
        handler: () => {
          console.log('Option 2 clicked');
        }
      }, {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }
  ngOnInit() {
  }

}
