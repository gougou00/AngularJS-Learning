// add Input
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {
  @Input() name: string;   // add Input annotation
  constructor() {
    // this.name = 'MoMO'; // set the name
  }

  ngOnInit() {
  }

}
