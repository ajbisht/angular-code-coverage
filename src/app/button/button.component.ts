import { Component } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
    <button (click)="handleClick()">Click Me</button>
  `,
})
export class ButtonComponent {
  handleClick() {
    console.log('Thanks Genie');
  }
}
