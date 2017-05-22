var importMap = {
	NgModule: 		'@angular/core',
	BrowserModule: 	'@angular/platform-browser',
	FormsModule: 	'@angular/forms',
	AppComponent: 	'./app.component'
};


import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // NgModel

import { AppComponent }  from './app.component';

/*
console.log('hi');

Object.keys(importMap).map(function(item) {
	console.log(item, importMap[item]);
	//import { AppComponent }  from './app.component';
});
*/

@NgModule({
  imports: 
  [
    BrowserModule,
    FormsModule // <-- import the FormsModule before binding with [(ngModel)]
  ],
  declarations: 
  [
    AppComponent
  ],
  bootstrap: 
  [ 
  	AppComponent 
  ]
})
export class AppModule { }
