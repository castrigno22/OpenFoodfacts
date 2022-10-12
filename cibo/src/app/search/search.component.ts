import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  query: string | undefined;
  food: any;
  obsProduct: any;
  results: any;

  constructor() { }

  ngOnInit(): void {}
  
  submit(query: HTMLInputElement): void {
    if (!query.value) {
      return;
    }
    this.query = query.value;
    this.obsProduct = this.food.searchProduct(this.query);
    this.obsProduct.subscribe((data: any) => {
      this.results = data;
      console.log(this.results);
    });
  }

}
