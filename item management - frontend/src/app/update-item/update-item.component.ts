import {Component, OnInit} from '@angular/core';
import {FormsModule, NgForm, ReactiveFormsModule} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Item} from '../item';
import {ItemService} from '../service/item.service';

@Component({
  selector: 'app-update-item',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './update-item.component.html',
  styleUrl: './update-item.component.css'
})
export class UpdateItemComponent implements OnInit {
  item: Item = {
    code: '',
    name: '',
    description: '',
    price: 0,
    amount: 0
  };


  constructor(private router: Router,
              private routeActive: ActivatedRoute,
              private itemService: ItemService) {

  }

  ngOnInit(): void {
    this.loadItemData();
  }

  goBack() {
    this.router.navigate(['/'])
  }

  loadItemData() {
    const code = this.routeActive.snapshot.paramMap.get('code');
    if (code) {
      this.itemService.getItemById(code).subscribe(item => {
        this.item = item;
      });
    }
  }

  updateItem(frmModel: NgForm) {
    if (frmModel.invalid) {
      alert('Invalid form data');
      return;
    }
    console.log(this.item);
    this.itemService.updateItem(this.item.code,this.item).subscribe({
      next:(resolve)=>{
        alert('Item Updated Successfully!');
        this.router.navigate(['/']);
      },
      error:(err)=>{
        console.log('Error Updating item ', err)
      }
    });
  }


}
