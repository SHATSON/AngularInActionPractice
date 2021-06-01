import { Component, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'summary',
  templateUrl: './summary.component.htm',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent {

  @Input() stock: any;

  isNegative() {
    return (this.stock && this.stock.change < 0);
  }

  isPositive() {
    return (this.stock && this.stock.change > 0);
  }

}
