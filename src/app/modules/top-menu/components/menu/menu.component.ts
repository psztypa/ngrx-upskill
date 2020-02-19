import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromMenu from '../../state'
import * as menuActions from '../../state/menu.actions'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  showOnlyOnSale$: Observable<boolean>;

  constructor(private store: Store<fromMenu.State>) { }

  checkChanged(value: boolean) {
    this.store.dispatch(new menuActions.ToggleShowOnlyOnSale(value));
  }

  ngOnInit() {
    this.showOnlyOnSale$ = this.store.pipe(select(fromMenu.getShowOnlyOnSale));

  }

}
