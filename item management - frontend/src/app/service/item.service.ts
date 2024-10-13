import {forwardRef, Inject, Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Item} from '../item';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private baseURL = 'http://localhost:8080/api/v1/items';

  constructor(private http: HttpClient) {
  }

  getItemList(): Observable<Item[]> {
    return this.http.get<any>(`${this.baseURL}`);
  }

  getItemById(code:string):Observable<Item>{
    const url=`${this.baseURL}/${code}`;
    return this.http.get<Item>(url);
  }

  addItem(item:Item):Observable<Item>{
    return this.http.post<Item>(`${this.baseURL}`,item);
  }

  updateItem(code:string,item:Item):Observable<Item>{
    return this.http.put<Item>(`${this.baseURL}/${code}`,item);
  }

  deleteItem(code:string):Observable<Item>{
    return this.http.delete<Item>(`${this.baseURL}/${code}`);
  }


}
