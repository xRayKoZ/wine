import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

import { Wine } from '../../models/wine';

@Injectable({
  providedIn: 'root'
})
export class WineService {
  private jsonUrl = environment.config.jsonUrl;

  constructor(
    private http: HttpClient
  ) { }

  public getAll(): Observable<Wine[]> {
    return this.http.get<Wine[]>(this.jsonUrl);
  }

  public getByUrl(url: string): Observable<Wine> {
    return this.http.get<Wine[]>(this.jsonUrl).pipe(
      map((res: Array<Wine>) => {
        return res.find(r => r.url === url);
      })
    );
  }

  public getByCategory(category: string): Observable<Wine[]> {
    return this.http.get<Wine[]>(this.jsonUrl).pipe(
      map((res: Array<Wine>) => {
        return res.filter(r => r.category === category);
      })
    );
  }

  public searchWine(name: string) { }
}
