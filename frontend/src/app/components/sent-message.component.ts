import { Component, Input } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'sent-message',
  standalone: true,
  imports: [DatePipe],
  template: `
    <div class="sent-message-container">
      <div class="sent-message-header">
        <div class="from">{{ formattedFrom }}</div>
        <div class="sent-time">{{ sentTime | date:'EEE, MMM d, y, h:mm a' }}</div>
      </div>
      <div class="sent-message-body">
        {{ body }}
      </div>
    </div>
  `,
  styles: [`
    .sent-message-container {
      margin-bottom: 1.5rem;
    }
    .sent-message-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 0.25rem;
      font-size: 0.97rem;
      color: #6b7280;
    }
    .from {
      font-weight: 600;
      color: #4f46e5;
    }
    .sent-time {
      font-size: 0.85rem;
      color: #888;
    }
    .sent-message-body {
      border: 1px solid #e5e7eb;
      border-radius: 0.75rem;
      padding: 1rem;
      background: #f9fafb;
      font-size: 1.08rem;
      color: #222;
      word-break: break-word;
    }
  `]
})
export class SentMessageComponent {
  @Input() from!: string;
  @Input() sentTime!: string | Date;
  @Input() body!: string;

  get formattedFrom(): string {
    // Remove + and country code (assume US: +1), then format as xxx-xxx-xxxx
    if (!this.from) return '';
    let digits = this.from.replace(/[^0-9]/g, '');
    if (digits.length === 11 && digits.startsWith('1')) {
      digits = digits.slice(1);
    }
    if (digits.length === 10) {
      return digits.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
    }
    return this.from;
  }
} 