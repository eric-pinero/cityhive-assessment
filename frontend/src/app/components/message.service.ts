import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SentMessage } from './message.model';
import { Observable, map, switchMap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MessageService {
  constructor(private http: HttpClient) {}

  fetchMessages(): Observable<SentMessage[]> {
    return this.http.get<any[]>('/twilio/sent_messages', { withCredentials: true }).pipe(
      map(data => data.map(msg => ({
        from: msg.from,
        body: msg.body,
        sentTime: msg.created_at,
        sid: msg.sid
      })))
    );
  }

  sendMessage(from: string, body: string): Observable<any> {
    return this.http.get<{ csrfToken: string }>('/csrf', { withCredentials: true }).pipe(
      map(res => res.csrfToken),
      switchMap((csrfToken: string) => {
        const headers = new HttpHeaders({ 'X-CSRF-Token': csrfToken });
        return this.http.post<any>('/twilio/send_sms', { from, body }, { withCredentials: true, headers });
      })
    );
  }
} 