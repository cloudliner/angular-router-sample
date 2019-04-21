import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {
  targetId: string;
  targetSubId: string;

  constructor() {
    this.targetId = String(Math.floor(Math.random() * 100000));
    this.targetSubId = String(Math.floor(Math.random() * 100000));
  }

  ngOnInit() {
  }
}
