import { Component, OnInit } from '@angular/core';
import { EventBusService, EmitEvent, Events } from 'src/app/modules/core/services/event-bus.service';

@Component({
  selector: 'app-action-card',
  templateUrl: './action-card.component.html',
  styleUrls: ['./action-card.component.scss']
})
export class ActionCardComponent implements OnInit {

  constructor(private eventBusService: EventBusService) { }

  ngOnInit() {
  }

  onAddOneClick() {
    this.eventBusService.emit(new EmitEvent(Events.IncreaseCount, 1))
  }

  onAddFiveClick() {
    this.eventBusService.emit(new EmitEvent(Events.IncreaseCount, 5))
  }

}
