import {Component} from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms';
import {Item} from '../item';
import {ItemService} from '../service/item.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {NgClass} from '@angular/common';


@Component({
  selector: 'app-add-item',
  standalone: true,
  imports: [
    FormsModule,
    HttpClientModule,
    NgClass
  ],
  templateUrl: './add-item.component.html',
  styleUrl: './add-item.component.css'
})
export class AddItemComponent {
  item: Item = {
    code: '',
    name: '',
    description: '',
    price: 0,
    amount: 0
  }

  constructor(private itemService: ItemService) {
  }

  saveItem(frmModel: NgForm) {
    frmModel.control.markAllAsTouched();
    if (frmModel.invalid) {
     // alert("invalid");
      console.log(frmModel.value);
    } else {
      const newItem = frmModel.value;
      console.log(newItem);
      this.itemService.addItem(newItem).subscribe({
          next: (responce) => {
            console.log('item Saved Sucessfully!', responce);
            frmModel.resetForm();
          },
          error: (err) => console.log('Error saving Item ', err)
        }
      );
    }
  }
}
