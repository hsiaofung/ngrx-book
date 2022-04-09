import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Book } from './books.model'

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  @Input() books: Array<Book>|null = []
  @Output() add = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }

}
