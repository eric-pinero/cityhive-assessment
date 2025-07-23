import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SentMessageComponent } from './sent-message.component';
import { MessageService } from './message.service';
import { SentMessage } from './message.model';

@Component({
  selector: 'message-history',
  standalone: true,
  imports: [CommonModule, SentMessageComponent],
  template: `
    <h2>Message History</h2>
    <div class="history-list">
      <div *ngIf="loading">Loading...</div>
      <div *ngIf="error" class="error-message">{{ error }}</div>
      <div *ngIf="!loading && messages.length === 0">No messages sent yet.</div>
      <ng-container *ngIf="messages.length > 0">
        <sent-message
          *ngFor="let msg of messages"
          [from]="msg.from"
          [sentTime]="msg.sentTime"
          [body]="msg.body"
        />
      </ng-container>
    </div>
  `,
  styleUrl: './message-history.component.css'
})
export class MessageHistoryComponent implements OnInit {
  messages: SentMessage[] = [];
  loading = true;
  error = '';

  constructor(private messageService: MessageService) {}

  ngOnInit() {
    this.fetchMessages();
  }

  fetchMessages() {
    this.loading = true;
    this.error = '';
    this.messageService.fetchMessages().subscribe({
      next: (data) => {
        this.messages = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = err?.error?.error || 'Failed to load messages.';
        this.loading = false;
      }
    });
  }
} 