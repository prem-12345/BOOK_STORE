import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BooksService } from '../services/booksService/books.service';

@Component({
  selector: 'app-get-all-books',
  templateUrl: './get-all-books.component.html',
  styleUrls: ['./get-all-books.component.scss']
})
export class GetAllBooksComponent implements OnInit {
  booksArray: any;
  bookcount: any;
  token: any;
  hideTitle:boolean=true;

  constructor( private router: Router, private booksService: BooksService) { }

  ngOnInit(): void {
    this.token = localStorage.getItem('token')
    this.getBooks();
  }

  getBooks() {

    this.booksService.getBooksService().subscribe((response: any) => {

        console.log(response.result)

        this.booksArray = response.result;
        this.bookcount = response.result.length;

        console.log("getBooksArray", this.booksArray);

      })
  }

  onBookDetails(book:any){
    localStorage.setItem('bookId',book._id);
    console.log("id",book._id);
    this.router.navigateByUrl('/book-details/'+book._id)
  
  }

  sortlowtohigh(){
    this.booksArray.sort((a:any,b:any) => a.price - (b.price));
    this.hideTitle=false;
  }
  sorthightolow(){
    this.booksArray.sort((a:any,b:any) => b.price - (a.price));
    this.hideTitle=false;
  }

  newestarrivalse(){
    this.booksArray.reverse()
    this.hideTitle=false;
  }
}


