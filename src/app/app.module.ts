import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Store } from '@rx-signals/store';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [Store],
  bootstrap: [AppComponent],
})
export class AppModule {}
