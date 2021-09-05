import { Component, OnInit } from '@angular/core';
import { ApiService } from  '../api.service';
import {Router} from "@angular/router";
import {Observable, of} from 'rxjs';

@Component({
  selector: 'app-lab',
  templateUrl: './lab.component.html',
  styleUrls: ['./lab.component.css']
})
export class LabComponent implements OnInit {

	  public  lb:  Array<object> = [];
	  public searchBtnDisable: boolean = false;

	  constructor(private router: Router,private  apiService:  ApiService) { }

  ngOnInit() {
  }
  
  
  searchOnClick(){
	  this.searchBtnDisable = true;
	  
		console.log("this lab ");
		
				    this.apiService.getLab().subscribe((data:  Array<object>) => {
				        this.lb  =  <any>data;
				        console.log(data);
				        this.searchBtnDisable = false;
				    });
  }

}
