import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RegisterService } from './register/register.service';
import { UserListComponent } from './user-list/user-list.component';
import { TooltipModule } from '@coreui/angular';
import { AuthInterceptor } from './auth/auth.interceptor';
import { UserEditComponent } from './user-edit/user-edit.component';
import { LoginGuard } from './auth/login.guard';
import { HeaderComponent } from './common/component/header/header.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductItemComponent } from './common/component/product-item/product-item.component';
import { CartComponent } from './cart/cart.component';
import { CartItemComponent } from './common/cart-item/cart-item.component';
import { ProductFormComponent } from './product-form/product-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UserListComponent,
    UserEditComponent,
    HeaderComponent,
    ProductListComponent,
    ProductItemComponent,
    CartComponent,
    CartItemComponent,
    ProductFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    RegisterService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    LoginGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
