import { Component, OnInit, Input } from '@angular/core';
import { Message } from './message.model';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  @Input() message: Message[];
  @Input() togglestar: (id: number) => void;
  @Input() togglecheckbox: (id: number) => void;
  
  constructor() { }

  ngOnInit() {
  }
}
