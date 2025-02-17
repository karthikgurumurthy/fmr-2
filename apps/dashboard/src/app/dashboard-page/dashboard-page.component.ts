/* eslint-disable @typescript-eslint/no-unused-vars */
import { Component } from '@angular/core';
import { ExternalDashboardTileService } from './external-dashboard-tile.service';

@Component({
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent {
  constructor(private externalService: ExternalDashboardTileService) {}

  addTile(): void {
    this._add('dashboard-tile');
  }

  addExternal(): void {
    this.externalService.load();
    this._add('external-dashboard-tile');
  }

  private _add(elementName: string): void {
    const data = [Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100)];

    const content = document.getElementById('content');

    // TODO: Dynamically add a dashboard-tile element to the content
    //				 + set data's values to the attributes a, b, and c.
    // HINT: use document.createElement, setAttribute, and appendChild
    // HINT2: for the layout, assign the following classes: col-lg-4 col-md-3 col-sm-2
    const tile = document.createElement(elementName);

    tile.setAttribute('class', 'col-lg-4 col-md-6 col-sm-12');
    tile.setAttribute('a', '' + data[0]);
    tile.setAttribute('b', '' + data[1]);
    tile.setAttribute('c', '' + data[2]);

    content.appendChild(tile);
  }
}
