import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {

  @Input() gameImage:string = ''
  @Input() gameLabel: string = ''
  @Input() gameType:string = '';
  @Input() gamePrice:string = ''


}
