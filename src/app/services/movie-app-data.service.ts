import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { MyPurchasesType } from '../models/movie-app-data/my-purchases-type';
import { TheatresNearYouType } from '../models/movie-app-data/theatres-near-you-type';
import { TheatresType } from '../models/movie-app-data/theatres-type';
import { NowPlayingType } from '../models/movie-app-data/now-playing-type';
import { MovieListType } from '../models/movie-app-data/movie-list-type';
import { ShowtimesType } from '../models/movie-app-data/showtimes-type';
import { ErrorHandlerService } from './error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class MovieAppDataService {
  constructor(
    private http: HttpClient
  ) { }

  public getNowPlayingList(): Observable<NowPlayingType[]> {
    return this.http.get<NowPlayingType[]>("https://excel2json.io/api/share/15755be7-cee3-4b74-4382-08da496bf5f2")
      .pipe(catchError(ErrorHandlerService.handleError<NowPlayingType[]>('getNowPlayingList', [])));
  }

  public getMovieListList(): Observable<MovieListType[]> {
    return this.http.get<MovieListType[]>("https://excel2json.io/api/share/99cd7568-0b49-4c09-4387-08da496bf5f2")
      .pipe(catchError(ErrorHandlerService.handleError<MovieListType[]>('getMovieListList', [])));
  }

  public getTheatresList(): Observable<TheatresType[]> {
    return this.http.get<TheatresType[]>("https://excel2json.io/api/share/5435e256-3846-4895-4385-08da496bf5f2")
      .pipe(catchError(ErrorHandlerService.handleError<TheatresType[]>('getTheatresList', [])));
  }

  public getShowtimesList(): Observable<ShowtimesType[]> {
    return this.http.get<ShowtimesType[]>("https://excel2json.io/api/share/f179620a-3bb6-49cd-4384-08da496bf5f2")
      .pipe(catchError(ErrorHandlerService.handleError<ShowtimesType[]>('getShowtimesList', [])));
  }

  public getTheatresNearYouList(): Observable<TheatresNearYouType[]> {
    return this.http.get<TheatresNearYouType[]>("https://excel2json.io/api/share/49f543dc-9c4e-43e8-4386-08da496bf5f2")
      .pipe(catchError(ErrorHandlerService.handleError<TheatresNearYouType[]>('getTheatresNearYouList', [])));
  }

  public getMyPurchasesList(): Observable<MyPurchasesType[]> {
    return this.http.get<MyPurchasesType[]>("https://excel2json.io/api/share/3f89384c-e58f-429a-4388-08da496bf5f2")
      .pipe(catchError(ErrorHandlerService.handleError<MyPurchasesType[]>('getMyPurchasesList', [])));
  }
}
