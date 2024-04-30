import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-baseball-card',
  templateUrl: './baseball-card.component.html',
  styleUrls: ['./baseball-card.component.css'],
})
export class BaseballCardComponent implements OnInit {
  picture = '../../../../assets/images/ForYouFitnessLogo_Mono-Black.png';
  startYear = 2003;
  endYear = 2007;
  timeframe = 'High School';
  lifestyle = 'Student Athlete';
  summary = 'High School';
  constructor() {}

  ngOnInit(): void {}
}
