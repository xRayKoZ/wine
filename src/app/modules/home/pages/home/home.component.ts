import { Component, OnInit } from '@angular/core';

import { WineService } from './../../../../core/services/wine/wine.service';

@Component({
  selector: 'wine-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private wineService: WineService
  ) { }

  ngOnInit(): void {
    this.wineService.getAll().subscribe(res => console.log(typeof res));
    this.wineService.getByUrl('vin-blanc').subscribe(res => console.log(res));
  }

}
