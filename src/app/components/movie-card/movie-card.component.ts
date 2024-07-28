import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {firstValueFrom, Subscription} from "rxjs";
import {MovieService} from "../../services/movie.service";
import {FormControl} from "@angular/forms";
import {NgForOf, NgIf} from "@angular/common";
import {FooterComponent} from "../footer/footer.component";

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [
    NgForOf,
    FooterComponent,
    NgIf
  ],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.css'
})
export class MovieCardComponent implements OnInit, OnDestroy {
  @Input()
  movieTitle: FormControl;
  cardTitle: string;
  cardPlot: string;
  cardImage: any;
  movieTitleSubscription: Subscription;
  movies: Array<any>;
  isMovieSelected: boolean;

  constructor(private movieService: MovieService) {
    this.cardTitle = '';
    this.cardPlot = '';
    this.cardImage = '';
    this.movieTitle = new FormControl<any>('',{ updateOn: 'blur' });
    this.movieTitleSubscription = new Subscription();
    this.movies = new Array<any>();
    this.isMovieSelected = false;
  }

  ngOnInit() {
    this.movieTitleSubscription = this.movieTitle.valueChanges.subscribe((val) => {
      this.isMovieSelected = false;
      this.movies.length = 0;
      if(val) this.retrieveMovies(val);
    })
  }

  ngOnDestroy() {
    this.movieTitleSubscription.unsubscribe();
  }

  async retrieveMovie(id: string) {
    let title = document.getElementById(id)?.querySelector('.card-body')?.querySelector('.card-title')?.textContent;
    await firstValueFrom(this.movieService.getMovie(String(title), id))
      .then((resp) => {
      this.cardTitle = resp?.Title;
      this.cardPlot = resp?.Plot;
      this.cardImage = resp?.Poster;
    });


  }

  async retrieveMovies(title: any) {
    this.movies.length = 0;
    await firstValueFrom(this.movieService.getMovies(String(title))).then((resp) => {
      this.movies.push(...resp?.Search);
      this.updateAllCards(this.movies);
    })
  }

  async select(event: any) {
    let id = event?.target?.offsetParent?.id
    await this.retrieveMovie(id);
    this.isMovieSelected = true;
  }
  moveBack() {
    this.isMovieSelected = false;
  }

  private updateAllCards(dataArr: Array<any>) {
    this.movies = dataArr;
  }
}
