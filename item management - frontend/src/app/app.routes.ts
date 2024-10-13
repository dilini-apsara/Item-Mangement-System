import { Routes } from '@angular/router';
import {AddItemComponent} from './add-item/add-item.component';
import {ItemListComponent} from './item-list/item-list.component';
import {UpdateItemComponent} from './update-item/update-item.component';


export const routes: Routes = [
  {
    path:'add-item',
    component:AddItemComponent
  },
  {
    path:'update/:code',
    component:UpdateItemComponent
  },

  {
    path:'',
    component:ItemListComponent
  }
];
