import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  baseURL = 'http://localhost:3000'

  //get all products details from DB
  getALLProducts(){

    return this.http.get(`${this.baseURL}/allProducts`)


  }

  viewProductAPI(id:any){

    return this.http.get(`${this.baseURL}/view/${id}`)

  }



  registerAPI(body:any){
    return this.http.post(`${this.baseURL}/register`,body)
  }


  loginAPI(body:any){
    return this.http.post(`${this.baseURL}/login`,body)



  }


   appendToken(){
    const token =sessionStorage.getItem('token')

    let headers =new HttpHeaders()
    if (token) {
       headers=headers.append('Authorization',`Bearer ${token}`)

    }
    return {headers}
   }



    addToWishlistAPI(body:any){
      return this.http.post(`${this.baseURL}/wishlist`,body,this.appendToken())
    }


    getToWishlistAPI(){

      return this.http.get(`${this.baseURL}/wishlist`,this.appendToken())
    }


    deleteWishlistAPI(id:any){
      return this.http.delete(`${this.baseURL}/wishlist/${id}`,this.appendToken())

    }



    addToCartAPI(body:any){
      return this.http.post(`${this.baseURL}/cart`,body,this.appendToken())
    }



    getToCartAPI(){

      return this.http.get(`${this.baseURL}/cart`,this.appendToken())
    }


    deleteCartAPI(id:any){
      return this.http.delete(`${this.baseURL}/cart/${id}`,this.appendToken())

    }

    incrementCartAPI(id:any){

      return this.http.get(`${this.baseURL}/cart/${id}`,this.appendToken())
    }


    decrementCartAPI(id:any){

      return this.http.get(`${this.baseURL}/cartDecrement/${id}`,this.appendToken())
     

    }


}
