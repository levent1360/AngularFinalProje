import { FirebaseService } from 'src/app/services/firebase.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'yoneticipaneli',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {

  girisYapan:string;
  constructor(public service:FirebaseService) { }

  ngOnInit(): void {
    this.girisY()
  }

  girisY(){
    console.log(this.service.OturumAcan())
    
    this.girisYapan=this.service.OturumAcan();
  }

}
