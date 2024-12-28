import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Card} from '../../shared/domain/interfaces/card';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CardService {

  private apiUrl = 'http://localhost:3000/cards';

  constructor(private http: HttpClient) {}

  public getCards(): Observable<Card[]> {
    return this.http.get<Card[]>(this.apiUrl);
  }

  public saveCard(card: Card): Observable<Card> {
    return this.http.post<Card>(this.apiUrl, card);
  }
}
