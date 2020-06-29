import { Component, OnInit, Input } from '@angular/core';
import { Wine } from 'src/app/core/models/wine';

@Component({
  selector: 'wine-card',
  templateUrl: './wine-card.component.html',
  styleUrls: ['./wine-card.component.scss']
})
export class WineCardComponent implements OnInit {
  @Input() wineList: Wine[];

  constructor() { }

  ngOnInit(): void {
  }

}
