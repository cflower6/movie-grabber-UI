import {Component, Input} from '@angular/core';
import {FormBuilder, FormControl, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MovieService} from "../../services/movie.service";
import {firstValueFrom} from "rxjs";
import {MovieCardComponent} from "../movie-card/movie-card.component";
import {FooterComponent} from "../footer/footer.component";

@Component({
  selector: 'app-movie-grabber',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    MovieCardComponent,
    FooterComponent
  ],
  templateUrl: './movie-grabber.component.html',
  styleUrl: './movie-grabber.component.css',
})
export class MovieGrabberComponent {
  @Input()
  title = new FormControl('',{ updateOn: 'blur' });
  constructor(private movieService: MovieService, private formBuilder: FormBuilder) {}
  movieForm = this.formBuilder.group({
    title: '',
  });

  updateTitle() {
    this.title.reset();
  }
}
