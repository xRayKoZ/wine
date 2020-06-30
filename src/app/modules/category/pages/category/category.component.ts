import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Wine } from 'src/app/core/models/wine';

@Component({
  selector: 'wine-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  public wineCategoryList$: Observable<Wine[]>;

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.wineCategoryList$ = this.activatedRoute.data.pipe(
      map((res: any) => {
        return res.category;
      })
    );
  }

}
