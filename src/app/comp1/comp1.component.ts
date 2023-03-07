import { Component, OnInit } from '@angular/core';
import { BehavService } from '../behav.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss']
})
export class Comp1Component implements OnInit {

  data: any = 'alma';

  constructor(private behav: BehavService) { }

  ngOnInit(): void {
  }

  sendDataToService() {
    this.behav.setData(this.data)
  }

}
