import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  products:any=[];


  constructor(private api:ApiService){}
  ngOnInit(): void {
    this.getWishlist();
  }


  getWishlist(){
    if (sessionStorage.getItem('token')) {

      this.api.getToWishlistAPI().subscribe({
        next:(res:any)=>{
          console.log(res);
          this.products=res

        },
        error:(err:any)=>{
          console.log(err);


        }
      })

    }
  }



  deleteProduct(id:any){
    this.api.deleteWishlistAPI(id).subscribe({
      next:(res:any)=>{
        console.log(res);
        this.getWishlist()


      },
      error:(err:any)=>{
        console.log(err);

      }
    })
  }

}
