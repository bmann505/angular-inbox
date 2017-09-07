import { Component, Input, OnInit } from '@angular/core';
import data from './app.data'
const baseURL = 'http://localhost:8082/api'
// const baseURL = 'https://shrouded-journey-20674.herokuapp.com/api'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

async ngOnInit() {
  const data = await fetch(`${baseURL}/messages`)
  const res = await data.json()
  const messages = res._embedded.messages
  this.messages = messages
}

messages = this.messages

  async togglestar(id) {
    let starred;
    this.messages.forEach(message => {
      if(message.id === id) {
        starred = !message.starred;
      }
    })
    const body = {
        "messageIds": [id],
        "command": "star",
        "star": starred
        }
    const settings = {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(body)
    }
    const data = await fetch(`${baseURL}/messages`, settings)
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
      messages.selected).length
    this.messages.forEach(message => {
      if (!message.selected) {
        message.selected = true;
      } else if (messagesLength === selectedLength) {
        message.selected = false;
      }
    })
  }

  async displayRead() {
    let read = [];
    this.messages.forEach(message => {
      if(message.selected && !message.read) {
        read.push(message.id)
      }
    })
    const body = {
        "messageIds": read,
        "command": "read",
        "read": true
      }
    const settings = {
      method: "PATCH",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(body)
    }
    const data = await fetch(`${baseURL}/messages`, settings)
    this.messages.forEach(message => {
      if(!message.read && message.selected) {
        message.read = true;
      }
    })
  }

  async displayUnread() {
    let unRead = [];
    this.messages.forEach(message => {
      if(message.selected && message.read) {
        unRead.push(message.id)
      }
    })
    const body = {
        "messageIds": unRead,
        "command": "read",
        "read": false
      }
    const settings = {
      method: "PATCH",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(body)
    }
    const data = await fetch(`${baseURL}/messages`, settings)
    this.messages.forEach(message => {
      if(message.read && message.selected) {
        message.read = false;
      }
    })
  }

  async deleteMessage() {
    let messagesSelected = [];
    this.messages.forEach(message => {
      if(message.selected) {
        messagesSelected.push(message.id)
      }
    })
    const body = {
      "messageIds": messagesSelected,
      "command": "delete"
    }
    const settings = {
      method: "PATCH",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(body)
    }
    const data = await fetch(`${baseURL}/messages`, settings)
    const refresh = await fetch(`${baseURL}/messages`)
    const res = await refresh.json()
    const messages = res._embedded.messages
    this.messages = messages
  }

  async addLabel(label) {
    let messagesSelected = []
    this.messages.forEach(message => {
      if(message.selected) {
        messagesSelected.push(message.id)
      }
    })
    const body = {
        "messageIds": messagesSelected,
        "command": "addLabel",
        "label": label
      }
    const settings = {
      method: "PATCH",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(body)
    }
    const data = await fetch(`${baseURL}/messages`, settings)
    this.messages.forEach((message, index) => {
      if(message.labels.indexOf(label) === -1 && message.selected) {
        message.labels.push(label);
      }
    })
  }

  async removeLabel(label) {
    let messagesSelected = [];
    this.messages.forEach(message => {
      if (message.selected) {
      messagesSelected.push(message.id)
      }
    })
    const body = {
      "messageIds": messagesSelected,
      "command": "removeLabel",
      "label": label
    }
    const settings = {
      method: "PATCH",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(body)
    }
    const data = await fetch(`${baseURL}/messages`, settings)
    this.messages.forEach((message, index) => {
      let removeIndex = message.labels.indexOf(label)
      if(message.labels.indexOf(label) !== -1 && message.selected) {
        message.labels.splice(removeIndex, 1);
      }
    })
  }

toggleSelectButton() {
  let messagesSelected = [];
  this.messages.forEach(message => {
    if(message.selected) {
      messagesSelected.push(message)
    }
  })
  if (messagesSelected.length === 0) {
    return "fa fa-square-o"
  } else if (messagesSelected.length === this.messages.length) {
    return "fa fa-check-square-o"
  } else {
    return "fa fa-minus-square-o"
  }
}

unReadCounter() {
  let readMessages = [];
  this.messages.forEach(message => {
    if (message.read) {
      readMessages.push(message);
    }
  })
  return readMessages.length
}

newMessage(event) {
  event.preventDefault;
  console.log("submit working")
}

}
