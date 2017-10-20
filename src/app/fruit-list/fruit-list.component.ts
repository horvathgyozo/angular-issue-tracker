import { Component, OnInit } from '@angular/core';

import { FruitsService } from "../fruits.service";

@Component({
  selector: 'fruit-list',
  templateUrl: './fruit-list.component.html',
  styleUrls: ['./fruit-list.component.css']
})
export class FruitListComponent implements OnInit {

  fruits: string[];

  constructor(
    private fruitsService: FruitsService
  ) {}

  ngOnInit(): void {
    this.fruitsService.getFruitsSlowly().then(fruits => this.fruits = fruits);
  }

}
