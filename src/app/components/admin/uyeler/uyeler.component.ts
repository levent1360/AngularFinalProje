import { Uyeler } from 'src/app/models/firebase/firebase.module';
import { FirebaseService } from 'src/app/services/firebase.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uyeler',
  templateUrl: './uyeler.component.html',
  styleUrls: ['./uyeler.component.css']
})
export class UyelerComponent implements OnInit {

  seciliUye: Uyeler = new Uyeler();
  detaySayfasi=false;

  uyeler: Uyeler[];
  constructor(public service: FirebaseService) { }

  ngOnInit(): void {
    this.UyeListele();
  }

  UyeListele() {
    this.service.uyeListele().snapshotChanges().subscribe(data => {
      this.uyeler = [];
      data.forEach(satir => {
        const y = { ...satir.payload.toJSON(), key: satir.key };
        this.uyeler.push(y as Uyeler);
      });
    });
  }

  secUye(uye: Uyeler) {
    return this.seciliUye = uye;
  }

}
