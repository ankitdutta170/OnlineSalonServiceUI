import { Component, OnInit } from '@angular/core';
import { Card } from 'src/model/card';
import { CardService } from '../card.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {

  cards: Card[];
  message: string = null;
  errorMessage: string = null;
  header: string = "List of cards";
  constructor(private service:CardService) { }

  ngOnInit() {
    this.loadData();
  }
  delete(card_id: number): void {
    this.service.deleteCard(card_id).subscribe(
      (response) => {
        this.message = response;
        this.loadData();
      },
      (error) => console.log(error)
    );

  }

  loadData(): void {

    this.service.getCards().subscribe(
      (data) => {
        
        this.cards = data;
        console.log(this.cards);
        this.errorMessage = null;
      },
      (failResponse) => {
        this.errorMessage = failResponse.error.errorMessage;
      }
    )
  }

}
