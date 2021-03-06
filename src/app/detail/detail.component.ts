import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit, OnDestroy {
  id: string;
  subscribedId: string;
  subId: string;
  subscribedSubId: string;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    console.log('DetailComponent#ngOnInit');

    this.subId = this.route.snapshot.params.subId;
    this.id = this.route.parent.snapshot.params.id;
    this.route.params.subscribe(res => {
      this.subscribedSubId = res.subId;
    });
    this.route.parent.params.subscribe(res => {
      this.subscribedId = res.id;
    });
  }

  ngOnDestroy(): void {
    console.log('DetailComponent#ngOnDestroy');
  }
}
