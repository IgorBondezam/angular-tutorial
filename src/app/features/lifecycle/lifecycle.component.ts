import { Component, OnInit, OnChanges, OnDestroy, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, DoCheck, SimpleChanges } from '@angular/core';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-lifecycle',
  standalone: true,
  template: `
    <div>
      <h1>Ciclo de Vida do Angular</h1>
      <ul>
        <li *ngFor="let log of logs">{{ log }}</li>
      </ul>
    </div>
  `,
  imports: [
    NgForOf
  ],
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements
  OnInit,
  OnChanges,
  OnDestroy,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  DoCheck {

  logs: string[] = [];

  logEvent(hook: string): void {
    const timestamp = new Date().toISOString();
    const message = `[${timestamp}] - ${hook}`;
    this.logs.push(message);
    console.log(message);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.logEvent('ngOnChanges');
  }

  ngOnInit(): void {
    this.logEvent('ngOnInit');
  }

  ngDoCheck(): void {
    this.logEvent('ngDoCheck');
  }

  ngAfterContentInit(): void {
    this.logEvent('ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    this.logEvent('ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
    this.logEvent('ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    this.logEvent('ngAfterViewChecked');
  }

  ngOnDestroy(): void {
    this.logEvent('ngOnDestroy');
  }
}
