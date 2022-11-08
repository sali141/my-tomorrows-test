import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-search',
  templateUrl: './header-search.component.html',
  styleUrls: ['./header-search.component.scss']
})
export class HeaderSearchComponent implements OnInit {
  searchText!: string;

  constructor() { }

  ngOnInit(): void {
  }

  searchMovies() {
    if (this.searchText) {
      console.log(this.searchText)
    }
  }
}


