import { FirebaseService } from 'src/app/services/firebase.service';
import { UyeTipiM } from './../../../models/firebase/firebase.module';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ayarlar',
  templateUrl: './ayarlar.component.html',
  styleUrls: ['./ayarlar.component.css']
})
export class AyarlarComponent implements OnInit {
  seciliUyeTipi: UyeTipiM = new UyeTipiM()
  uyeTipler: UyeTipiM[];
  yeniuyeTipi: UyeTipiM = new UyeTipiM()
  constructor(public service: FirebaseService) { }

  ngOnInit(): void {
    this.UyeTipiListele();
  }

  uyeTipiekle() {    
    this.service.uyeTipEkleService(this.yeniuyeTipi).then(s=>{
      window.alert("başarılı");
      console.log(this.yeniuyeTipi);
    }).catch(err=>{
      window.alert("bir hata var");
      console.log(err)
    });
  }

  UyeTipiListele() {
    this.service.uyeTipListele().snapshotChanges().subscribe(data => {
      this.uyeTipler = [];
      data.forEach(satir => {
        const y = { ...satir.payload.toJSON(), key: satir.key };
        this.uyeTipler.push(y as UyeTipiM);
      });
    });
  }

  secUyeTipi(uyeTipi) {
    return this.seciliUyeTipi = uyeTipi;
  }
}
