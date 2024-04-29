import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { group } from '@angular/animations';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  shoppingCart = this._formBuilder.group({
    name: '',
    email: '',
    phone: '',
    message: '',
    services: [{}] as any,
  });
  referenceSources = [
    {id: 'friend', name: 'Friend/Family'},
    {id: 'instagram', name: 'Instagram'},
    {id: 'facebook', name: 'Facebook'},
    {id: 'google', name: 'Google'},
    {id: 'twitter', name: 'Twitter'},
    {id: 'linkedin', name: 'LinkedIn'},
    {id: 'other', name: 'Other'},
  ]
  servicesList = [
    { id: 'youth-health', name: 'Health', group: 'youth' },
    {
      id: 'youth-athlete',
      name: 'Athlete',
      group: 'youth',
    },
    {
      id: 'adult-health',
      name: 'Health',
      group: 'adult',
    },
    {
      id: 'adult-bodybuilder',
      name: 'Bodybuilding',
      group: 'adult',
    },
    { id: 'adult-endurance', name: 'Endurance', group: 'adult' },
    {
      id: 'adult-strength',
      name: 'Strength',
      group: 'adult',
    },
    {
      id: 'adult-power',
      name: 'Power',
      group: 'adult',
    },
    {
      id: 'senior-senior',
      name: 'Senior',
      group: 'adult',
    },
  ];
  youthServices = this.servicesList.filter(
    (service) => service.group === 'youth'
  );
  adultServices = this.servicesList.filter(
    (service) => service.group === 'adult'
  );
  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {}
}
