import { Component } from '@angular/core';
import { AngularFire } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  messages;

  constructor(public af: AngularFire) {
    this.messages = af.database.list('messages');
  }

  send(author, message) {
    this.messages.push({ author: author.value, message: message.value });
    author.value = message.value = "";
  }
}
