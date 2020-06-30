import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

import { WineService } from 'src/app/core/services/wine/wine.service';
import { Wine } from 'src/app/core/models/wine';
import { map } from 'rxjs/operators';

@Component({
  selector: 'wine-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  resultSearch$: Observable<Wine[]>;

  constructor(
    private wineService: WineService
  ) { }

  ngOnInit(): void {
  }

  public search(word: string): void {
    if (word.length > 0) {
      this.resultSearch$ = this.wineService.searchWine(word).pipe(
        map((res: Wine[]) => {
          return res.slice(0, 5);
        })
      );
    } else {
      this.resultSearch$ = null;
    }
  }

}
