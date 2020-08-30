import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WrongurlComponent } from './wrongurl/wrongurl.component';
import { HtmlIntroductionComponent } from './html-introduction/html-introduction.component';
import { HtmlBasicComponent } from './html-basic/html-basic.component';
import { CssComponent } from './css/css.component';
import { BootstrapIntroductionComponent } from './bootstrap-introduction/bootstrap-introduction.component';
import { BootstrapBasicComponent } from './bootstrap-basic/bootstrap-basic.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { RedirectpageComponent } from './redirectpage/redirectpage.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'HOME',
    pathMatch:'full'
  },
  {
    path:'RedirectPage',
    redirectTo:'HOME',
    pathMatch:'full'
  },
  {
    path:'HOME',
    component:HomeComponent
  },
  {
    path:'HTML',
    children:[
      {
        path:'html-introduction',
        component:HtmlIntroductionComponent
      },
      {
        path:'html-basic',
        component:HtmlBasicComponent
      }
    ]
  },
  {
    path:'CSS',
    component:CssComponent
  },
  {
    path:'Bootstrap',
    children:[
      {
        path:'Bootstrap-introduction',
        component:BootstrapIntroductionComponent
      },
      {
        path:'Bootstrap-basic',
        component:BootstrapBasicComponent
      }
    ]
  },
  {
    path:'Javascript',
    component:JavascriptComponent
  },
  {
    path:'RedirectPage',
    component:RedirectpageComponent
  },
  {
    path:'**',
    component:WrongurlComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
