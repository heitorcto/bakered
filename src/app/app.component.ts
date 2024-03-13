import { CommonModule } from '@angular/common'
import { Component, OnInit, inject } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { AdvertisingController } from './controllers/advertising-controller';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  protected money = 0;

  protected moneyAdition = 0.1;

  protected subscription!: Subscription;

  protected advertisingController = inject(AdvertisingController);

  ngOnInit(): void {
    this.subscribeInterval();
  }

  subscribeInterval(): void {
    this.subscription = interval(1000).subscribe(() => {
      this.money += this.moneyAdition;

      this.advertisingController
        .checkMoneyAdvertising(this.money);
    });
  }

  addAdvertisingEvent(): void {
    this.money = this.money - this.advertisingController.requiredToBuy;

    this.moneyAdition += this.advertisingController
      .addAdvertising();

    this.advertisingController
      .checkMoneyAdvertising(this.money);
  }
}
