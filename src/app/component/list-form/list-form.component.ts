import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-list-form',
  templateUrl: './list-form.component.html',
  styleUrls: ['./list-form.component.css']
})
export class ListFormComponent implements OnInit {

  @Input()
  name='';
  
  constructor() { }

  ngOnInit(): void {
  }
}
