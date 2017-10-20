import { Component } from '@angular/core';

import { MyObject } from '../my-object';

@Component({
  selector: 'app-names',
  templateUrl: './names.component.html',
  styleUrls: ['./names.component.css']
})
export class NamesComponent {

  name = 'Győző';
  myObject: MyObject = {
    id: 1,
    name: 'Győző'
  };

}
