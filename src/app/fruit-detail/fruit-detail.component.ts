import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { FruitsService } from "../fruits.service";

@Component({
  selector: 'fruit-detail',
  templateUrl: './fruit-detail.component.html',
  styleUrls: ['./fruit-detail.component.css']
})
export class FruitDetailComponent implements OnInit {

  fruit: string;

  constructor(
    private fruitsService: FruitsService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.fruitsService.getFruit(+params.get('id')))
      .subscribe(fruit => this.fruit = fruit);
  }

}
