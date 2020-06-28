import { Injectable } from '@angular/core';
import { Resolve, ActivatedRoute, ParamMap, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Wine } from 'src/app/core/models/wine';

import { WineService } from 'src/app/core/services/wine/wine.service';


@Injectable({
  providedIn: 'root'
})
export class CategoryResolver implements Resolve<Observable<Wine[]>> {

  constructor(
    private wineService: WineService
  ) { }

  resolve(activatedRoute: ActivatedRouteSnapshot) {
    return this.wineService.getByCategory(activatedRoute.params.cat);
  }

  /* return activatedRoute.paramMap.pipe(
    switchMap((params: ParamMap) => this.wineService.getByCategory(params.get('cat')))
  ); */
}
