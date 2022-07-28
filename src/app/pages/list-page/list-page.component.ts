import { Component, OnInit } from '@angular/core';
import { PostType } from 'src/app/service/post';
import { fetchList,deleteList } from 'src/app/service/post.service';
import { Router,ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HeroService } from 'src/app/service/hero.service';


@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})
export class ListPageComponent implements OnInit {

  list:any[] =[];

  name = '';
  email = '';
  phone = '';
  country = '';
  Language = '';
  user: any = {};
  
  postList: PostType[] = [];
  
  constructor(private router: Router, 
    private route: ActivatedRoute,
    private http:HttpClient,
    private data: HeroService) { }
  

  ngOnInit(): void {
    this.postList = fetchList();
    console.log(this.postList,"list");
    // let url='https://jsonplaceholder.typicode.com/todos/-1';
    // return this.http.get(url);
    // let promise = (testurl:any) => new Promise((resolve, reject)=>{
    //   this.http.get(testurl).subscribe((response:any) => {
    //     if(response) {
    //       resolve(response);
    //     } else {
    //       reject();
    //     }
    //  });
    
    // this.http.get(testurl)
    // .toPromise()
    // .then(res => {
    //   resolve(res);
    // },
    // msg => {
    //   reject("Failed");
    // })
    // });

    // promise(url)
    // .then((e) => console.log(e))
    // .catch((error) => console.log(error));
    
    //api
    // this.data.getData(() => {
      // console.warn(this.data);
      // this.data=data?.hits;
    // })
    // let promise = new Promise((resolve, reject)=>{
    //   resolve("I am surely going to get resolved!");
  
    // reject(new Error('Will this be ignored?')); // ignored
    // resolve("Ignored?"); 
    // });
    
  
  }

  

  goToPage() {
    this.router.navigateByUrl('post/create');
  }

  deleteUser(id:Number) {
   deleteList(id);
   this.postList = fetchList();
  }
  
  
  editUser() {
    this.router.navigateByUrl('post/edit');
   }

}
