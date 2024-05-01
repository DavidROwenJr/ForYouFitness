import { Component, OnInit } from '@angular/core';

export interface BaseballCard {
  picture: string;
  timeframe: string;
  lifestyle: string;
  summary: string;
  startYear: number;
  endYear: number;
  weightHigh: number;
  weightLow: number;
  programs: string[];
  diets: string[];
}

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css'],
})
export class AboutMeComponent implements OnInit {
  panelOpenState = false;
  cardbook: BaseballCard[] = [];
  highschool: BaseballCard = {
    picture: '../../../../assets/images/ForYouFitnessLogo_Mono-Black.png',
    timeframe: 'High School',
    lifestyle: 'Student Athlete',
    summary: 'TBD',
    startYear: 2003,
    endYear: 2007,
    weightHigh: 280,
    weightLow: 180,
    programs: [
      'Bigger, Faster, Stronger',
      '3x Day Full Body',
      '5x Day Full Body',
    ],
    diets: ['No diets - Eat Everything'],
  };
  college: BaseballCard = {
    picture: '../../../../assets/images/ForYouFitnessLogo_Mono-Black.png',
    timeframe: 'College',
    lifestyle: 'Social & Honors Fraternity',
    summary: 'TBD',
    startYear: 2007,
    endYear: 2012,
    weightHigh: 350,
    weightLow: 280,
    programs: ['P90X', 'Insanity', 'Starting Strength'],
    diets: [
      'No diets - Eat Everything',
      'Whole30',
      'Paleo',
      'Protein Shake Only',
    ],
  };
  polyone: BaseballCard = {
    picture: '../../../../assets/images/ForYouFitnessLogo_Mono-Black.png',
    timeframe: 'PolyOne',
    lifestyle: 'Professional',
    summary: 'TBD',
    startYear: 2012,
    endYear: 2015,
    weightHigh: 280,
    weightLow: 205,
    programs: [
      'P90X',
      'Insanity',
      'Josef Rakich Plan',
      'Starting Strength',
      '5x5 Stronglifts',
      '5/3/1',
    ],
    diets: [
      'Whole30',
      'Paleo',
      'Keto',
      'Intermittent Fasting',
      'Carb Cycling',
      'IIFYM',
    ],
  };
  generalElectric: BaseballCard = {
    picture: '../../../../assets/images/ForYouFitnessLogo_Mono-Black.png',
    timeframe: 'General Electric',
    lifestyle: 'Professional',
    summary: 'TBD',
    startYear: 2015,
    endYear: 2020,
    weightHigh: 245,
    weightLow: 215,
    programs: ['For You Fitness - Concepts'],
    diets: [
      'Whole30',
      'Paleo',
      'Keto',
      'Intermittent Fasting',
      'IIFYM',
      'Vegetarian',
      'Vegan',
    ],
  };
  covid: BaseballCard = {
    picture: '../../../../assets/images/ForYouFitnessLogo_Mono-Black.png',
    timeframe: 'Post COVID',
    lifestyle: 'Professional',
    summary: 'TBD',
    startYear: 2020,
    endYear: new Date().getFullYear(),
    weightHigh: 255,
    weightLow: 225,
    programs: ['For You Fitness - Concepts'],
    diets: ['Whole30', 'IIFYM', 'Intermittent Fasting'],
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
