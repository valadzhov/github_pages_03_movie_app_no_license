import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IGX_CARD_DIRECTIVES, IGX_DATE_PICKER_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IGX_LIST_DIRECTIVES, IGX_SELECT_DIRECTIVES, IGX_TABS_DIRECTIVES, IgxAvatarComponent, IgxButtonDirective, IgxIconButtonDirective, IgxIconComponent, IgxOverlayOutletDirective, IgxRippleDirective, IgxToggleActionDirective, IgxToggleDirective } from 'igniteui-angular';
import { Subject, takeUntil } from 'rxjs';
import { TheatresNearYouType } from '../models/movie-app-data/theatres-near-you-type';
import { TheatresType } from '../models/movie-app-data/theatres-type';
import { NowPlayingType } from '../models/movie-app-data/now-playing-type';
import { MovieListType } from '../models/movie-app-data/movie-list-type';
import { ShowtimesType } from '../models/movie-app-data/showtimes-type';
import { MovieAppDataService } from '../services/movie-app-data.service';

@Component({
  selector: 'app-movies',
  imports: [FormsModule, IGX_CARD_DIRECTIVES, IGX_DATE_PICKER_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IGX_LIST_DIRECTIVES, IGX_SELECT_DIRECTIVES, IGX_TABS_DIRECTIVES, IgxAvatarComponent, IgxButtonDirective, IgxIconButtonDirective, IgxIconComponent, IgxOverlayOutletDirective, IgxRippleDirective, IgxToggleActionDirective, IgxToggleDirective],
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  public movieAppDataNowPlaying: NowPlayingType[] = [];
  public value: string = '1';
  public movieAppDataMovieList: MovieListType[] = [];
  public movieAppDataTheatres: TheatresType[] = [];
  public movieAppDataShowtimes: ShowtimesType[] = [];
  public movieAppDataTheatresNearYou: TheatresNearYouType[] = [];

  constructor(private movieAppDataService: MovieAppDataService) { }

  ngOnInit() {
    this.movieAppDataService.getNowPlayingList().pipe(takeUntil(this.destroy$)).subscribe(data => this.movieAppDataNowPlaying = data);
    this.movieAppDataService.getMovieListList().pipe(takeUntil(this.destroy$)).subscribe(data => this.movieAppDataMovieList = data);
    this.movieAppDataService.getTheatresList().pipe(takeUntil(this.destroy$)).subscribe(data => this.movieAppDataTheatres = data);
    this.movieAppDataService.getShowtimesList().pipe(takeUntil(this.destroy$)).subscribe(data => this.movieAppDataShowtimes = data);
    this.movieAppDataService.getTheatresNearYouList().pipe(takeUntil(this.destroy$)).subscribe(data => this.movieAppDataTheatresNearYou = data);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
