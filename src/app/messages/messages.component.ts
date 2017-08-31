import { Component, OnInit, Input } from '@angular/core';
import { Message } from './message/message.model';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  @Input() messages: Message[];
  @Input() togglestar: (id: number) => void;
  @Input() togglecheckbox: (id: number) => void;

  constructor() { }

  ngOnInit() {

  }


}
