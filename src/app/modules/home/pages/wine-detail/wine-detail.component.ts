import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { Wine } from 'src/app/core/models/wine';
import { map } from 'rxjs/operators';

@Component({
  selector: 'wine-detail',
  templateUrl: './wine-detail.component.html',
  styleUrls: ['./wine-detail.component.scss']
})
export class WineDetailComponent implements OnInit {
  public wineDetail$: Observable<Wine>;

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.wineDetail$ = this.activatedRoute.data.pipe(
      map((res: any) => {
        return res.wine;
      })
    );
  }

}
