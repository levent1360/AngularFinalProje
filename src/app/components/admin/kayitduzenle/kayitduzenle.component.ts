import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Kayitlar, Oda, İlanTipi, İlİlce } from 'src/app/models/firebase/firebase.module';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-kayitduzenle',
  templateUrl: './kayitduzenle.component.html',
  styleUrls: ['./kayitduzenle.component.css']
})
export class KayitduzenleComponent implements OnInit {
  
  esyaDurumu = [
    { name: "Eşyalı" },
    { name: "Eşyasız" }
  ];
  ililceler: İlİlce[];
  odalar: Oda[];
  ilanTipler: İlanTipi[];
  key: string;
  secKayit: Kayitlar = new Kayitlar();
  uid: string;
  constructor(
    public route: ActivatedRoute,
    public servis: FirebaseService,
    public router: Router
  ) { }

  ngOnInit() {
    var user = JSON.parse(localStorage.getItem("user"));
    this.uid = user.uid;
    this.route.params.subscribe(p => {
      this.key = p.key;
      this.KayitGetir();
    });
    this.OdaListele();
    this.ililceListele();
    this.IlanTipListele();
  }
  KayitGetir() {
    this.servis.KayitByKey(this.key).snapshotChanges().subscribe(data => {
      const y = { ...data.payload.toJSON(), key: this.key };
      this.secKayit = (y as Kayitlar);
      if (this.uid != this.secKayit.EkleyenUid) {
        this.router.navigate(['/kayitlar']);
      }
    });
  }

  kayitDuzenle() {
    this.secKayit.DuzenlemeTarih=this.tarih();
    this.servis.kayitDuzenle(this.secKayit).then(d => {
      this.router.navigate(['/yonetici/kayitlar']);
    });
  }

  
  tarih(){
    var t= new Date();
    return t.getTime().toString();
  }


  
  ililceListele() {
    this.servis.ililceListeleService().snapshotChanges().subscribe(data => {
      this.ililceler = [];
      data.forEach(satir => {
        const y = { ...satir.payload.toJSON(), key: satir.key };
        this.ililceler.push(y as İlİlce);
      });
    });
  }
  OdaListele() {
    this.servis.OdaListeleServis().snapshotChanges().subscribe(data => {
      this.odalar = [];
      data.forEach(satir => {
        const y = { ...satir.payload.toJSON(), key: satir.key };
        this.odalar.push(y as Oda);
      });
    });
  }
  IlanTipListele() {
    this.servis.ilanTipListeleSevice().snapshotChanges().subscribe(data => {
      this.ilanTipler = [];
      data.forEach(satir => {
        const y = { ...satir.payload.toJSON(), key: satir.key };
        this.ilanTipler.push(y as İlanTipi);
      });
    });
  }

}
