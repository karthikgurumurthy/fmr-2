import { Component, OnInit } from '@angular/core';
import { AirportService } from '@flight-workspace/flight-lib';
import { Subscription } from 'rxjs';

@Component({
  selector: 'airport',
  templateUrl: './airport.component.html',
  styleUrls: ['./airport.component.css']
})
export class AirportComponent implements OnInit {
  airports: string[] = [];

  private subscription: Subscription;
  constructor(private airportService: AirportService) {}

  ngOnInit(): void {
    this.subscription;
    this.airportService.findAll().subscribe((airports) => {
      this.airports = airports;
    });
  }

  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
