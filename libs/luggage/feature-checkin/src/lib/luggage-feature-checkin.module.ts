import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoggerModule } from '@flight-workspace/logger-lib';
import { LuggageDomainModule } from '@flight-workspace/luggage/domain';
import { CheckinComponent } from './checkin.component';
import { LuggageUiCardModule } from '@flight-workspace/luggage/ui-card';

@NgModule({
  imports: [
    CommonModule,
    LuggageDomainModule,
    LuggageUiCardModule,
    LoggerModule,
    RouterModule.forChild([{ path: '', component: CheckinComponent }])
  ],
  declarations: [CheckinComponent],
  exports: [CheckinComponent]
})
export class LuggageFeatureCheckinModule {}

//Sample comment
