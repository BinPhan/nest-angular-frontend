import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RegisterService } from './register/register.service';
import { UserListComponent } from './user/user-list/user-list.component';
import { TooltipModule } from '@coreui/angular';
import { AuthInterceptor } from './auth/auth.interceptor';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { LoginGuard } from './auth/login.guard';
import { HeaderComponent } from './common/component/header/header.component';
import { UserComponent } from './user/user.component';
import { UserSearchComponent } from './user/user-search/user-search.component';
import { PaginationComponent } from './common/pagination/pagination.component';
import { ModalComponent } from './common/component/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UserListComponent,
    UserEditComponent,
    HeaderComponent,
    UserComponent,
    UserSearchComponent,
    PaginationComponent,
    ModalComponent,
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
    LoginGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
