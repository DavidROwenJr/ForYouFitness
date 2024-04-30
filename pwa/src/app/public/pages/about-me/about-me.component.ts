import { Component, OnInit } from '@angular/core';

export interface BaseballCard {
  picture: string;
  timeframe: string;
  lifestyle: string;
  summary: string;
  startYear: number;
  endYear: number;
}

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css'],
})
export class AboutMeComponent implements OnInit {
  cardbook: BaseballCard[] = [];

  highschool: BaseballCard = {
    picture: '../../../../assets/images/ForYouFitnessLogo_Mono-Black.png',
    timeframe: 'High School',
    lifestyle: 'Student Athlete',
    summary: 'TBD',
    startYear: 2003,
    endYear: 2007,
  };
  college: BaseballCard = {
    picture: '../../../../assets/images/ForYouFitnessLogo_Mono-Black.png',
    timeframe: 'College',
    lifestyle: 'Fraternity & Honor Society',
    summary: 'TBD',
    startYear: 2007,
    endYear: 2012,
  };
  polyone: BaseballCard = {
    picture: '../../../../assets/images/ForYouFitnessLogo_Mono-Black.png',
    timeframe: 'PolyOne',
    lifestyle: 'Professional',
    summary: 'TBD',
    startYear: 2012,
    endYear: 2015
  };
  generalElectric: BaseballCard = {
    picture: '../../../../assets/images/ForYouFitnessLogo_Mono-Black.png',
    timeframe: 'General Electric',
    lifestyle: 'Professional',
    summary: 'TBD',
    startYear: 2015,
    endYear: 2020
  };
  covid: BaseballCard = {
    picture: '../../../../assets/images/ForYouFitnessLogo_Mono-Black.png',
    timeframe: 'Post COVID',
    lifestyle: 'Professional',
    summary: 'TBD',
    startYear: 2020,
    endYear: new Date().getFullYear()
  };

  constructor() {}

  ngOnInit(): void {
    this.cardbook = [
      this.highschool,
      this.college,
      this.polyone,
      this.generalElectric,
      this.covid,
    ];
  }
}
