import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { bootstrap } from '@angular-architects/module-federation-tools';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

bootstrap(AppModule, { production: environment.production });

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
