import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(
    private http:HttpClient
  ) { }

  getData() {
    // let url='https://jsonplaceholder.typicode.com/todos/';
    // // return this.http.get(url);
    // let response = fetch(url);
    // console.log(response);
    // let promise = new Promise((resolve, reject)=>{
    //   resolve('success');
    //   reject('error')
    // })
    // promise.then((message)=>{
    //   console.log(" this is in then"+ message)
    // }).catch((message)=>{
    //   console.log(" this is in catch"+ message)
    // })
    // return promise;
  }
  
}
