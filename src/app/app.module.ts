import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { GetAllBooksComponent } from './components/get-all-books/get-all-books.component';
import {MatMenuModule} from '@angular/material/menu';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { MyCartComponent } from './components/my-cart/my-cart.component';
import {MatSelectModule} from '@angular/material/select';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatRadioModule} from '@angular/material/radio';
import { OrderplacedComponent } from './components/orderplaced/orderplaced.component';
import {MatDividerModule} from '@angular/material/divider';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    DashboardComponent,
    GetAllBooksComponent,
    BookDetailsComponent,
    MyCartComponent,
    WishlistComponent,
    OrderplacedComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatCardModule,
    FlexLayoutModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatMenuModule,
    MatSelectModule,
    MatExpansionModule,
    MatRadioModule,
    MatDividerModule
    
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
