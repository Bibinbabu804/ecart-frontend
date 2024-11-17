import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-pro',
  templateUrl: './view-pro.component.html',
  styleUrls: ['./view-pro.component.css']
})
export class ViewPROComponent implements OnInit {



  constructor(private api:ApiService,private route:ActivatedRoute){}

  product:any={}
  ngOnInit(): void {
    this.viewProduct()


  }







  viewProduct(){
    this.route.params.subscribe((res:any)=>{
      console.log(res);
      const {id} =res
      console.log(id);

      this.api.viewProductAPI(id).subscribe((res:any)=>{
        console.log(res);

        this.product = res

      })


    })

  }



  addToWishlist(product:any){

    if (sessionStorage.getItem('token')) {

      this.api.addToWishlistAPI(product).subscribe({
        next:(res:any)=>{
          console.log(res);

        },
        error:(err:any)=>{
          alert(err.error)
          console.log(err);


        }
      })

    }else{
      alert('please login')
    }



  }



  addToCart(product:any){
    product.quantity=1

    if (sessionStorage.getItem('token')) {

      this.api.addToCartAPI(product).subscribe({
        next:(res:any)=>{
          console.log(res);

        },
        error:(err:any)=>{
          alert(err.error)
          console.log(err);


        }
      })

    }else{
      alert('please login')
    }

















  }

















}
