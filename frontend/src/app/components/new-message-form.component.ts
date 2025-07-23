import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MessageService } from './message.service';

@Component({
  selector: 'new-message-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <h2>New Message</h2>
    <form #messageForm="ngForm" (ngSubmit)="onSubmit(messageForm)">
      <div class="form-group first">
        <label for="phone" class="form-label">Phone number</label>
        <input id="phone" name="phone" type="tel" required ngModel />
      </div>
      <div class="form-group">
        <label for="message" class="form-label">Message</label>
        <textarea id="message" name="message" rows="3" required maxlength="250" [(ngModel)]="messageText"></textarea>
        <div class="char-count">{{ messageText.length }} / 250</div>
      </div>
      <button type="submit">Send Message</button>
    </form>
    <a class="clear-link" (click)="messageForm.resetForm()">Clear fields</a>
    <div *ngIf="successMessage" style="color: green; margin-top: 1rem;">{{ successMessage }}</div>
    <div *ngIf="errorMessage" style="color: red; margin-top: 1rem;">{{ errorMessage }}</div>
  `,
  styleUrl: './new-message-form.component.css'
})
export class NewMessageFormComponent {
  successMessage = '';
  errorMessage = '';
  @Output() messageSent = new EventEmitter<void>();
  messageText = '';

  constructor(private messageService: MessageService) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      const { phone } = form.value;
      this.successMessage = '';
      this.errorMessage = '';
      this.messageService.sendMessage(phone, this.messageText).subscribe({
        next: () => {
          this.successMessage = 'Message sent!';
          form.resetForm();
          this.messageText = '';
          this.messageSent.emit();
        },
        error: (err) => {
          this.errorMessage = err?.error?.error || 'Failed to send message.';
        }
      });
    }
  }
} 