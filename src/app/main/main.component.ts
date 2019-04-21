import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {
  id: string;
  subscribedId: string;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    console.log('MainComponent#ngOnInit');

    this.id = this.route.snapshot.params.id;
    this.route.params.subscribe(res => {
      this.subscribedId = res.id;
    });
  }

  ngOnDestroy(): void {
    console.log('MainComponent#ngOnDestroy');
  }
}
