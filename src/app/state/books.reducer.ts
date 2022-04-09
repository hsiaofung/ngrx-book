import { createReducer, on } from '@ngrx/store'
import { retrievedBookList } from './books.actions'
import {Book} from '../book-list/books.model'

export const initialState: Array<Book> = []

export const booksReducer = createReducer(
    initialState, 
    on(retrievedBookList, (state, { books}) => books),
    
)