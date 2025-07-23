import { Component, ViewChild } from '@angular/core';
import { NewMessageFormComponent } from './new-message-form.component';
import { MessageHistoryComponent } from './message-history.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'messaging',
  standalone: true,
  imports: [NewMessageFormComponent, MessageHistoryComponent, HttpClientModule],
  template: `
    <div class="columns">
      <section class="section">
        <new-message-form (messageSent)="onMessageSent()" />
      </section>
      <section class="section">
        <message-history #history />
      </section>
    </div>
  `,
  styleUrl: './messaging.component.css'
})
export class MessagingComponent {
  @ViewChild('history') historyComponent!: MessageHistoryComponent;

  onMessageSent() {
    this.historyComponent.fetchMessages();
  }
} 