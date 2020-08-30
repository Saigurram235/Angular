import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { BootstrapBasicComponent } from './bootstrap-basic/bootstrap-basic.component';
import { BootstrapIntroductionComponent } from './bootstrap-introduction/bootstrap-introduction.component';
import { CssComponent } from './css/css.component';
import { HomeComponent } from './home/home.component';
import { HtmlComponent } from './html/html.component';
import { HtmlBasicComponent } from './html-basic/html-basic.component';
import { HtmlIntroductionComponent } from './html-introduction/html-introduction.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { RedirectpageComponent } from './redirectpage/redirectpage.component';
import { WrongurlComponent } from './wrongurl/wrongurl.component';

@NgModule({
  declarations: [
    AppComponent,
    BootstrapComponent,
    BootstrapBasicComponent,
    BootstrapIntroductionComponent,
    CssComponent,
    HomeComponent,
    HtmlComponent,
    HtmlBasicComponent,
    HtmlIntroductionComponent,
    JavascriptComponent,
    RedirectpageComponent,
    WrongurlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
