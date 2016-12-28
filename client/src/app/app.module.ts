import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes  } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component'
import { FooterComponent } from './components/footer/footer.component'
import { ProductComponent } from './components/product/product.component'
import { AsideComponent } from './components/aside/aside.component'

import { ProductService } from './services/product.service';
import { LoginComponent } from './components/login/login.component';

const routes : Routes = [
  {path:'', component : ProductComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductComponent,
		AsideComponent,
		LoginComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],

  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
