import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AngularComponent } from './angular/angular.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { MongodbComponent } from './mongodb/mongodb.component';
import { NodejsComponent } from './nodejs/nodejs.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductComponent } from './product/product.component';
import { MycityPipe } from './mycity.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AboutusComponent,
    AngularComponent,
    ContactusComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    MongodbComponent,
    NodejsComponent,
    PageNotFoundComponent,
    ProductComponent,
    MycityPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
