import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Wine } from 'src/app/core/models/wine';

@Component({
  selector: 'wine-detail',
  templateUrl: './wine-detail.component.html',
  styleUrls: ['./wine-detail.component.scss']
})
export class WineDetailComponent implements OnInit {
  public wineDetail: Wine;

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.wineDetail = this.activatedRoute.snapshot.data.wine;
  }

}
