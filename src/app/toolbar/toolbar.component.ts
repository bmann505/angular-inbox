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
  @Input() addLabel: (label: string) => void;
  @Input() removeLabel: (label: string) => void;
  @Input() toggleSelectButton: () => void;
  @Input() unReadCounter: () => void;
  @Input() toggleForm: () => void;
  @Input() displayForm: () => void;
  constructor() { }

  ngOnInit() {
  }

}
