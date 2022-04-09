import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-my-display',
  templateUrl: './my-display.component.html',
  styleUrls: ['./my-display.component.scss']
})
export class MyDisplayComponent implements OnInit {
  count$: Observable<number>
  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.select('count')
   }

  ngOnInit(): void {
  }

}
