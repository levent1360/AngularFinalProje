import { Mesaj } from './../../models/firebase/firebase.module';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  uyari:Mesaj=new Mesaj(false,"","");
  constructor() { }

  ngOnInit(): void {
  }

}
