import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
  constructor(private API:ApiService){}

  products:any=[]
  ngOnInit(): void {
  this.getProducts()
  }

    getProducts(){
      this.API.getALLProducts().subscribe((item:any) =>{
        console.log(item);
        this.products = item

      })

    }
  }


