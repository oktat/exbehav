import { Component, OnInit } from '@angular/core';
import { BehavService } from '../behav.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.scss']
})
export class Comp2Component implements OnInit {

  data: any;

  constructor(private behav: BehavService) { }

  ngOnInit(): void {
    this.behav.currentData.subscribe(data => {
      this.data = data;
    })
  }

}
