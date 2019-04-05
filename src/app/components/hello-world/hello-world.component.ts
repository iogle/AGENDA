import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.scss']
})
export class HelloWorldComponent implements OnInit {
  counter = 0;

  private increaseCounter(this) {
    this.counter++;
  }

  public getCounter() {
    return this.counter;
  }
  constructor() {}

  ngOnInit() {}
}
