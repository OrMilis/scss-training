import { Component, OnInit } from '@angular/core';
import { interval, map, Observable } from 'rxjs';

export const colorNames: string[] = [];
export type Colors = typeof colorNames[number];

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: [
    './container.component.scss',
    './ex2.scss',
    './ex3.scss',
    './ex4.scss',
  ],
})
export class ContainerComponent implements OnInit {
  typingText = `Hello, I'm typing text!`;
  typingObs$!: Observable<number>;

  colors: Record<Colors, string[]> = {};

  colorNames = colorNames;

  constructor() {
    this.typingObs$ = interval(150).pipe(
      map((_, index) => index % this.typingText.length)
    );

    Object.keys(this.colors).forEach((color) => {
      this.colors[color] = [...new Array(9)].map(
        (_, index) => `var(--${color}-${(index + 1) * 100})`
      );
    });
  }

  ngOnInit(): void {}
}
