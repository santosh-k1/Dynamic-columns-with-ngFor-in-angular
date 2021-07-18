import { Component, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor() {}
  dataList = [
    { Name: 'Zhang San', gender: 'Men', age: '10' },
    { Name: 'Li Si', gender: 'female', age: '20' },
    { Name: 'Wang Wu', gender: 'Men', Age: '30' }
  ];
  ngOnInit(): void {
    console.log(this.dataList);
  }
  name = 'Angular ' + VERSION.major;

  getKeys(item) {
    return Object.keys(item);
  }
}
