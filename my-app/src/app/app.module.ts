import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StnModule } from '@statnett/angular-components';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserAnimationsModule, StnModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
