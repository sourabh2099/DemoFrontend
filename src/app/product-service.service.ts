import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private http: HttpClient) { }

  addProduct(product: Product): Observable<any> {
    return this.http.post('http://localhost:7772/product', product, { responseType: 'text' });
  }

  editProduct(product:Product):Observable<any>{
    console.log('http://localhost:7772/product/'+ product.getProductd());
    return this.http.put('http://localhost:7772/product',product,{responseType:'text'});
  }
}
