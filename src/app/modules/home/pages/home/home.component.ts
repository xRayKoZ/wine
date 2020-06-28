import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { WineService } from './../../../../core/services/wine/wine.service';

import { Wine } from 'src/app/core/models/wine';

@Component({
  selector: 'wine-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public wineList$: Observable<Wine[]>;

  constructor(
    private wineService: WineService
  ) { }

  ngOnInit(): void {
    this.wineList$ = this.wineService.getAll();
  }

}
