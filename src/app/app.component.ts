import { Component, OnInit, ViewChild } from '@angular/core';
import { HelloWorldComponent } from './components/hello-world/hello-world.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild(HelloWorldComponent) child: HelloWorldComponent;

  ngOnInit() {}
  counter = 0;

  private increaseCounter(this) {
    this.counter++;
  }
  private getHelloWorldCounterValue() {
    this.counter = this.child.getCounter();
  }

  deleteEvent(event: any) {
    const itemIndex = this.events.findIndex(el => el === event);
    this.events.splice(itemIndex, 1);
  }

  events: Array<any> = [
    {
      time: '08:01',
      subject: 'Breakfast with Simon',
      location: 'Lounge Caffe',
      description: 'Discuss Q3 targets'
    },
    {
      time: '08:30',
      subject: 'Daily Standup Meeting (recurring)',
      location: 'Warsaw Spire Office'
    },
    { time: '09:00', subject: 'Call with HRs' },
    {
      time: '12:00',
      subject: 'Lunch with Timmoty',
      location: 'Canteen',
      description:
        'Project evalutation ile declaring a variable and using an if statement is a fine way to conditionally render a component, sometimes you might want to use a'
    }
  ];
}
