import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {CardForm, CardFormType} from './card.form';
import {Card} from '../../../shared/domain/interfaces/card';
import {CardService} from '../card.service';
import {NgIf} from '@angular/common';
import {take} from 'rxjs';

@Component({
  selector: 'app-card-form',
  standalone: true,
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.css'],
  imports: [
    ReactiveFormsModule,
    NgIf
  ],
})
export class CardFormComponent implements OnInit{
  @Output() saveCard: EventEmitter<void> = new EventEmitter<void>();

  public cardForm: FormGroup<CardFormType>;

  constructor(private fb: FormBuilder,
              private service: CardService) { //No angular nós já temos a injeção de dependencia feita direto no construtor
  }
  ngOnInit(): void {
    this.cardForm = CardForm.createForm(this.fb);
  }

  public submitForm() {
    if (this.cardForm.valid) {
      this.service.saveCard(this.cardForm.getRawValue()).pipe(take(1)).subscribe();
    }
  }

}
