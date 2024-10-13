import {Component, OnInit} from '@angular/core';
import {Item} from '../item';
import {NgFor, NgIf} from '@angular/common';
import {ItemService} from '../service/item.service';
import {HttpClientModule} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-item-list',
  standalone: true,
  imports: [
    NgIf, NgFor, HttpClientModule
  ],
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.css'
})
export class ItemListComponent implements OnInit {
  items: Item[] = [];

  constructor(private itemService: ItemService, private router:Router) {
  }

  ngOnInit(): void {
    this.loadItems();
  }

  loadItems(): void {
    this.itemService.getItemList().subscribe((data) => {
      this.items = data;
    })
  }


  updateItem( code: string) {
    console.log(code)
    this.router.navigate(['/update',code]);
  }

  deleteItem(code: string) {
    if(confirm('Are You sure You want to delete this Item? ')){
      this.itemService.deleteItem(code).subscribe({
        next:()=>{
          console.log("Item Deleted Successfully!");
          this.loadItems();
        },
        error:(err)=>{
          console.log("Error Deleting Item ",err)
        }
      });
    }
  }
}
