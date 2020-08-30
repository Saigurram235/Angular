import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ProductComponent } from './product/product.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AngularComponent } from './angular/angular.component';
import { MongodbComponent } from './mongodb/mongodb.component';
import { NodejsComponent } from './nodejs/nodejs.component';

const routes: Routes = [
  // {
  //   path:'',
  //   redirectTo:'home',
  //   pathMatch:'full'
  // },
  // {
  //   path:'home',
  //   component:HomeComponent
  // },
  // {
  //   path:'aboutus',
  //   component:AboutusComponent
  // },
  // {
  //   path:'contactus',
  //   component:ContactusComponent
  // },
  // {
  //   path:'product',
  //   // component:ProductComponent,
  //   children:[
  //     {
  //       path:'angular',
  //       component:AngularComponent
  //     },
  //     {
  //       path:'mongobd',
  //       component:MongodbComponent
  //     },
  //     {
  //       path:'nodejs',
  //       component:NodejsComponent
  //     },
  //   ]
  // },
  // {
  //   path:'**',
  //   component:PageNotFoundComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
