import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl,Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PostType } from 'src/app/service/post';
import { getDetails, updatePost } from 'src/app/service/post.service';


@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.css']
})
export class EditPageComponent implements OnInit {

  form: FormGroup; 
  id = 0;
  post: PostType[] = [];
  showErrors=false;
  selectedLanguage:any=[];
  Countries: any[] = [
    {
      id: 1, 
      name: 'India'
    },
    {
      id: 2, 
      name: 'Bangladesh'
    },
    {
      id: 3, 
      name: 'Nepal'
    }
  ]
  
  Languages = [
    {
      id: '1',
      name: 'Bengali',
      // isChecked: true
    },
    {
      id: '2',
      name: 'English',
      // isChecked: true
    },
    {
      id: '3',
      name: 'Hindi',
      // isChecked: true
    },
  ]

  constructor(private router: Router, private route: ActivatedRoute) {
    this.form = new FormGroup({
      name: new FormControl("",[Validators.required, Validators.minLength(2)]),
      email: new FormControl("",[Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      phone: new FormControl("",[Validators.required, Validators.pattern(new RegExp("[0-9 ]{10}"))]),
      country: new FormControl("",Validators.required),
      gender: new FormControl("",Validators.required),
      selectedLanguage:new FormControl([],Validators.required)
    })
   }
  

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"]
    this.post = getDetails(this.id);
    this.form.get('selectedLanguage')?.patchValue(this.post[0].languages);
    this.selectedLanguage = this.post[0].languages;
  }

  validate(){
    this.showErrors =true;
    return this.form.valid;
     }

  onSelectLanguage(event: any) {
    if(event.target.checked) {
      this.selectedLanguage.push(event.target.value as string);
    } else {
      const index = this.selectedLanguage.findIndex((e:string) => e === event.target.value);
      if(index > -1){
        this.selectedLanguage.splice(index,1);
      }
    }

    this.form.get('selectedLanguage')?.patchValue(this.selectedLanguage);
  }

 
  updateItem() {
    if(this.validate()){
      updatePost(this.form.value,this.id);
      this.router.navigateByUrl('post/list');
  }
  }


}
