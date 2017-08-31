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
    for (var i = 0; i < this.messages.length; i++) {
      if (id === this.messages[i].id)  {
          this.messages[i].starred = !this.messages[i].starred
      }
    }
  }

  togglecheckbox(id) {
    for (var i = 0; i < this.messages.length; i++) {
      if (id === this.messages[i].id) {
        this.messages[i].selected = !this.messages[i].selected
      }
    }
  }
}
