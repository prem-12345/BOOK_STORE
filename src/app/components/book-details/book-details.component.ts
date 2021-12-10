import { Component, OnInit } from '@angular/core';
import { BooksService } from '../services/booksService/books.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  orderCount = 0;
  data: any;
  bookId: any;
  hideCount:boolean=false;
  addToBagHide:boolean=true;


  constructor( private bookService:BooksService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.bookId = localStorage.getItem("bookId");
    console.log(this.bookId);
    this.getbookdetail();
  }


  getbookdetail() {
    this.bookService.getBooksService().subscribe(
      (response: any) => {
        response.result.forEach((element: any) => {
          if (element._id == this.bookId) {
            this.data = element;
          }
        });
        this._snackBar.open('get book details successful', '', {
          duration: 2000,
        })
      },
      (error) => console.log(error)
    )
  }

  
  addtobag(){
    this.addToBagHide = false;
    this.hideCount = true;

    this.bookService.addcartitem(this.data._id).subscribe((response) => {
      console.log(response);
      this._snackBar.open('book added to cart successful', '', {
        duration: 2000,
      })
    },
      (error) => console.log(error)
    )
  }

  updateCount() {
    let payload = {
      "quantityToBuy": this.orderCount
    }
    this.bookService.updateitemcount(this.data._id, payload).subscribe((response) => { 
        console.log(response) 
        this._snackBar.open('count updated successful', '', {
          duration: 2000,
        })
      },
      (error) => console.log(error)
    )
  }

  increaseCount(){
    this.orderCount += 1;
    this.updateCount();
   }
 
   decreaseCount(){
     if (this.orderCount > 0) {
       this.orderCount -= 1;
       this.updateCount();
     } else {
      return;
    }
 
   }


   addtowishlist() {
    this.bookService.addwishlist(this.data._id).subscribe(
      (response: any) => {
        console.log(response);
        this._snackBar.open('book added to wishlist successful', '', {
          duration: 2000,
        })
      },
      (error:any) => console.log(error)
    )
  }


  }








