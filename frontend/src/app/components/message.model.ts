export interface SentMessage {
  from: string;
  body: string;
  sentTime: string | Date;
  sid?: string;
} 