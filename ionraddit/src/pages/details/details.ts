import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  templateUrl: 'details.html'
})
export class DetailsPage {
	item: any;
	imgurl: any;
  constructor(public navCtrl: NavController, public params:NavParams) {
  	this.item = params.get('item');
  	this.imgurl = "";
  	if(this.item.preview) {
 	  	this.imgurl = this.item.preview.images[0].source.url.replace(/&amp;/g, '&');
  	}
  	console.log(params.get('item'));
  	console.log(this.imgurl);
  }

}
