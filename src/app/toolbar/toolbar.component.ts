import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  @Input() selectall: () => void;
  @Input() displayRead: () => void;
  @Input() displayUnread: () => void;
  @Input() deleteMessage: () => void;
  constructor() { }

  ngOnInit() {
  }

}
