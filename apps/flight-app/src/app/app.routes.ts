import { Routes } from '@angular/router';
import { BasketComponent } from './basket/basket.component';
import { HomeComponent } from './home/home.component';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { PassengerMf } from '../mf';
import { startsWith, WebComponentWrapper, WebComponentWrapperOptions } from '@angular-architects/module-federation-tools';

export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'basket',
    component: BasketComponent,
    outlet: 'aux'
  },
  {
    path: 'mf-passenger',
    loadChildren: () =>
      loadRemoteModule<PassengerMf>({
        // remoteEntry: 'http://localhost:3000/remoteEntry.js',
        remoteName: 'passenger',
        exposedModule: './module'
      }).then((esm) => esm.PassengerModule)
  },
  {
    path: 'angular2',
    component: WebComponentWrapper,
    data: {
      remoteEntry: 'https://gray-pond-030798810.azurestaticapps.net//remoteEntry.js',
      remoteName: 'angular2',
      exposedModule: './web-components',
      elementName: 'angular2-element'
    } as WebComponentWrapperOptions
  },
  {
    path: 'react',
    component: WebComponentWrapper,
    data: {
      remoteEntry: 'https://witty-wave-0a695f710.azurestaticapps.net/remoteEntry.js',
      remoteName: 'react',
      exposedModule: './web-components',
      elementName: 'react-element'
    } as WebComponentWrapperOptions
  },
  {
    matcher: startsWith('angular3'),
    component: WebComponentWrapper,
    data: {
      remoteEntry: 'https://gray-river-0b8c23a10.azurestaticapps.net/remoteEntry.js',
      remoteName: 'angular3',
      exposedModule: './web-components',
      elementName: 'angular3-element'
    } as WebComponentWrapperOptions
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];
