import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { TodoService } from '../service/todo.service';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {

  id: any
  constructor(private todoService : TodoService,
     private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.activatedRoute.snapshot.paramMap)
    console.log(this.activatedRoute.snapshot.params)
    //this.id = this.activatedRoute.snapshot.paramMap.get("id");
    //this.id = this.activatedRoute.snapshot.params["id"]
    this.activatedRoute.paramMap.subscribe(paramMap => { 
      this.id = paramMap.get('id'); 
  });
  }

}
