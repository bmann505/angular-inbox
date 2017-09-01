import { Component, Input } from '@angular/core';
import data from './app.data'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  messages = data;

  togglestar(id) {
    this.messages.forEach(message => {
      if (id === message.id) {
        message.starred = !message.starred;
      }
    })
  }

  togglecheckbox(id) {
    this.messages.forEach(message => {
      if (id === message.id) {
        message.selected = !message.selected;
      }
    })
  }

  select() {
    let messagesLength = this.messages.length;
    let selectedLength = this.messages.filter(messages =>
      messages.selected === true).length
    this.messages.forEach(message => {
      if (message.selected === false) {
        message.selected = true;
      } else if (messagesLength === selectedLength) {
        message.selected = false;
      }
    })
  }

  displayRead() {
    this.messages.forEach(message => {
      if(message.read === false && message.selected === true) {
        message.read = true;
      }
    })
  }

  displayUnread() {
    this.messages.forEach(message => {
      if(message.read === true && message.selected === true) {
        message.read = false;
      }
    })
  }
}
