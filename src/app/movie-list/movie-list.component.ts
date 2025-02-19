import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies: any[] = [];  // Inicialización

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.getMovies().subscribe(data => {
      this.movies = data;
    });
  }

  deleteMovie(id: number): void {
    this.movieService.deleteMovie(id).subscribe(() => {
      this.movies = this.movies.filter(movie => movie.id !== id);
    });
  }
}
