import { Kayitlar, Uyeler } from 'src/app/models/firebase/firebase.module';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-detay',
  templateUrl: './detay.component.html',
  styleUrls: ['./detay.component.css']
})
export class DetayComponent implements OnInit {

  uid:string;
  key: string;
  secKayit: Kayitlar = new Kayitlar();
  secUye:Uyeler = new Uyeler();
  constructor(
    public route: ActivatedRoute,
    public service: FirebaseService,
    public router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe(p => {
      this.key = p.key;
      this.KayitListele();
      this.uid=this.secKayit.EkleyenUid
    });
  }
  KayitListele() {
    this.service.KayitByKey(this.key).snapshotChanges().subscribe(data => {
      const y = { ...data.payload.toJSON(), key: this.key };
      this.secKayit = (y as Kayitlar);
    });
  }

}
