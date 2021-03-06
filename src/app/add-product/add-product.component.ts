import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  product:Product = new Product();

  constructor(private productService:ProductServiceService) { }

  ngOnInit() {
  }

  add():void{
    console.log("inside add fucntion");
      console.log(this.product);
      this.productService.addProduct(this.product).subscribe(
        data=>{console.log(data);
        
        }
      )
      ;
  }

}
