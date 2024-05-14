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
  // messages: string[] = [
  //   'A Crew filled with Good Vibes 🤘',
  //   'Never end bonding.',
  //   'Friends are the family you choose.',
  //   'Friends are the siblings God never gave us.',
  //   'Friendship`s the wine of life.',
  // ];
  // currentIndex = 0;

  // @ViewChild('marquee', { static: true }) marquee!: ElementRef;

  // constructor(private renderer: Renderer2) { }

  // ngAfterViewInit(): void {
  //   this.updateMessage();
  // }

  // updateMessage(): void {
  //   setInterval(() => {
  //     this.currentIndex = (this.currentIndex + 1) % this.messages.length;
  //     this.renderer.setProperty(this.marquee.nativeElement, 'innerText', this.messages[this.currentIndex]);
  //   }, 5000);
  // }
}
