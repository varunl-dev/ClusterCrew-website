import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-message-display',
  templateUrl: './message-display.component.html',
  styleUrl: './message-display.component.scss',
})
export class MessageDisplayComponent {
  messages = [
    'A Crew filled with Good Vibes 🤘',
    'Never end bonding.',
    'Friends are the family you choose.',
    'Friends are the siblings God never gave us.',
    'Friendship`s the wine of life.',
  ];
}
