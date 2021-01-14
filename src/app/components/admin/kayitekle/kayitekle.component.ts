import { FirebaseService } from 'src/app/services/firebase.service';
import { Kayitlar } from 'src/app/models/firebase/firebase.module';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kayitekle',
  templateUrl: './kayitekle.component.html',
  styleUrls: ['./kayitekle.component.css']
})
export class KayitekleComponent implements OnInit {


  yeniKayit:Kayitlar=new Kayitlar()
  constructor(public service:FirebaseService) { }



  yenikayitekle(){


  }

  tarih(){
    var t= new Date();
    return t.getTime().toString();
  }


  ngOnInit(): void {
  }

}
