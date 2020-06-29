import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Wine } from 'src/app/core/models/wine';

@Component({
  selector: 'wine-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  public wineCategoryList: Wine[];

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.wineCategoryList = this.activatedRoute.snapshot.data.category;
  }

}
