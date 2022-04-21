import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gameSW-test-comp',
  templateUrl: './test-comp.component.html',
  styleUrls: ['./test-comp.component.css']
})
export class TestCompComponent implements OnInit {

  constructor() {
    console.info("TestCompComponent.constructor()");
   }

  ngOnInit(): void {
    console.info("TestCompComponent.ngOnInit()");
  }

}
