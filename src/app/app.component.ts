import { Component, OnInit } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  list : any;


  constructor(
    private http: HttpClient) { }

  ngOnInit(): void {
    this.getApi();
  }

  getApi() {
    this.http.get("http://localhost:3000/posts").subscribe(data => {
      this.list = data
      console.log(this.list)
    });
  }
}
