import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MovieService} from "../../services/movie.service";

@Component({
  selector: 'app-movie-grabber',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './movie-grabber.component.html',
  styleUrl: './movie-grabber.component.css',
})
export class MovieGrabberComponent {
  title = new FormControl('');
  constructor(private movieService: MovieService, private formBuilder: FormBuilder) {}
  movieForm = this.formBuilder.group({
    title: '',
  });

  retrieveMovie() {
    console.log(this.title.value)
    this.movieService.getMovie(this.title.value).subscribe((resp) => {
      console.log(resp)
    }).unsubscribe()
  }
}
