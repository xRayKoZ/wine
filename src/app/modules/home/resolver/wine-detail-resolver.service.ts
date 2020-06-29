import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { WineService } from 'src/app/core/services/wine/wine.service';

import { Wine } from 'src/app/core/models/wine';

@Injectable({
  providedIn: 'root'
})
export class WineDetailResolver implements Resolve<Observable<Wine>> {

  constructor(
    private wineService: WineService
  ) { }

  resolve(activatedRoute: ActivatedRouteSnapshot): Observable<Wine> {
    return this.wineService.getByUrl(activatedRoute.params.wine);
  }
}
