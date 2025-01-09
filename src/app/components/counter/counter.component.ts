import { Component, signal } from '@angular/core';
import { ValueChangeEvent } from '@angular/forms';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
counter = signal(0);

Increment(){
  this.counter.update((val)=> val+1);
}
Decrement(){
  this.counter.update(val=> val-1);
}
Reset(){
  this.counter.set(0);
}
}
