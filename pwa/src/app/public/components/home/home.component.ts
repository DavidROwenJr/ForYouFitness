import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  isLoading = true;
  constructor() {}

  ngOnInit(): void {
    const counterFn = () => {
      console.log('simulated loading time for 2 seconds');
      this.isLoading = false;
    };
    setTimeout(counterFn, 3000);
  }
}
