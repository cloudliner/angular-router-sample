import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit, OnDestroy {
  targetId: string;
  targetSubId: string;

  constructor() {
    this.generateIds();
  }

  ngOnInit() {
    console.log('BaseComponent#ngOnInit');
  }

  randomize() {
    this.generateIds();
  }

  private generateIds() {
    this.targetId = String(Math.floor(Math.random() * 100000));
    this.targetSubId = String(Math.floor(Math.random() * 100000));
  }

  ngOnDestroy(): void {
    console.log('BaseComponent#ngOnDestroy');
  }
}
