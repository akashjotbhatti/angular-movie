import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.sass']
})
export class SearchMovieComponent implements OnInit {
  movies: any;
  searchTerm: string = 'Sherek';

  constructor(
    private movieAPI: MovieService,
    private route: ActivatedRoute
  ) {

  }

  showMovieDetail(){
    console.log('Show Detail');
  }

  searchMovie(){
    this.movieAPI.getMovies(this.searchTerm).subscribe((data:any) =>{
        this.movies = data['Search'];
    })
  }

  onKeyUp(event: any, data: string) {
    console.log( `Key Up: ${event.target.value} Data: ${data}`);
    this.searchTerm = event.target.value;
  }

  onKeyDown(event: any) {
    console.log( `Key Down: ${event.target.value}`);
  }

  onKeyPress(event: any) {
    console.log( `Key Press: ${event.target.value}`);
  }

  ngOnInit(): void {

  }

}
