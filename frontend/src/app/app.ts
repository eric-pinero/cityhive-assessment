import { Component, signal, OnInit } from '@angular/core';
import { MessagingComponent } from './components/messaging.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MessagingComponent, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  user = signal<string | null>(null);

  ngOnInit() {
    this.user.set('demo@example.com');
  }

  get userValue() {
    return this.user();
  }

  onLoggedIn(username: string) {
    this.user.set(username);
  }

  onLoggedOut() {
    this.user.set(null);
  }

  protected readonly title = signal('frontend');
}
