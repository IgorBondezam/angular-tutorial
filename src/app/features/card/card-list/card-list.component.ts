import {Component, Input, OnInit} from '@angular/core';
import {CardService} from '../card.service';
import {serveWebpackBrowser} from '@angular-devkit/build-angular/src/builders/dev-server/webpack-server';
import {Card} from '../../../shared/domain/interfaces/card';
import {take} from 'rxjs';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-card-list',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.css'
})
export class CardListComponent implements OnInit {

  public cards: Card[] = [];

  constructor(private service: CardService) {
  }

  ngOnInit(): void {
    this.service.getCards().pipe(take(1)).subscribe({
      next: (value: Card[]) => {this.cards = value},
      error: (e) => {console.log(e)}
    });
  }

}
