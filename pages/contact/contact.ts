import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
  styleUrls: ['contact.css'],
})
export class ContactPage {
  initValue1: number;
  initValue2: number;
  disValue: number;
  


  constructor(public navCtrl: NavController) {
  }

  compute(){
    this.disValue=(this.initValue1 - (this.initValue1 * this.initValue2/100));
    
  }

  
}
