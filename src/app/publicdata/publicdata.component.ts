import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-publicdata',
  templateUrl: './publicdata.component.html',
  styleUrls: ['./publicdata.component.css']
})
export class PublicdataComponent implements OnInit {

  constructor(private api: ApiService) {
    this.fetchUserData();
   }
  
  fetchUserData = () => {this.api.getPublicData().subscribe((data) => {this.Publicdata=data})
  }
  
  Publicdata: any = []

  ngOnInit(): void {
  }

}
