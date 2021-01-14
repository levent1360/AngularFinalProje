import { Kayitlar } from './../../../models/firebase/firebase.module';
import { FirebaseService } from 'src/app/services/firebase.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {map} from  'rxjs/operators';


@Component({
  selector: 'app-kayitlar',
  templateUrl: './kayitlar.component.html',
  styleUrls: ['./kayitlar.component.css']
})
export class KayitlarComponent implements OnInit {

  kayitlar: Kayitlar[];
  secKayit:Kayitlar=new Kayitlar();
  constructor(public service: FirebaseService, public router:Router) { }

  KayitListeGetir() {
    this.service.kayitListele().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        ))
    ).subscribe(data => {
      this.kayitlar = data;
    });
  }

  ngOnInit(): void {
    this.KayitListeGetir();
  }

  kayitSec(k:Kayitlar){
    Object.assign(this.secKayit,k);
  }

  kayitsil(k:Kayitlar){
    this.service.kayitSil(k.key);
  }
}
