import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MessageComponent } from './messages/message/message.component';
import { MessagesComponent } from './messages/messages.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { HttpClientModule } from '@angular/common/http';
import { ComposeComponent } from './compose/compose.component';


@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    MessagesComponent,
    ToolbarComponent,
    ComposeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
