import { Component, OnInit } from '@angular/core';
import { TitleService } from '../service/title.service';

@Component({
  selector: 'app-http-example',
  templateUrl: './http-example.component.html',
  styleUrls: ['./http-example.component.css']
})
export class HttpExampleComponent implements OnInit {

  posts : any
  constructor(private titleService: TitleService) { }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts(){
      this.titleService.getPosts().subscribe( 
        (data) => {
          console.log(data)
          this.posts = data;
        },
        (error) => {
          alert("Failed to fetch the data")
        },
        () =>{
          alert("all the data received");
        }
        
      );
  }

}
