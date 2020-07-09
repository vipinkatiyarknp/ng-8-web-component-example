import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-testcomp',
  templateUrl: './testcomp.component.html',
  styleUrls: ['./testcomp.component.scss']
})
export class TestcompComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get("https://reqres.in/api/users").subscribe(res =>{
      console.log("GOT RESPONSE>>>>",res)
    })
  }

}
