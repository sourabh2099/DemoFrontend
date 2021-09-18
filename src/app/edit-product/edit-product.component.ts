import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  product:Product = new Product();
  constructor(private productService: ProductServiceService) { }

  ngOnInit() {
  }

  edit(){
    console.log("inside edit product");
    return this.productService.editProduct(this.product).subscribe(data =>{
      console.log(data);
      console.log("returning from service");
    })
  }

}
