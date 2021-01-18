import { FirebaseService } from 'src/app/services/firebase.service';
import { Component, OnInit } from '@angular/core';
import { Kayitlar } from 'src/app/models/firebase/firebase.module';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  kayitlar: Kayitlar[];

  constructor(public service:FirebaseService) { }

  ngOnInit(): void {
    this.KayitListeGetir();
  }

  KayitListeGetir() {
      this.service.kayitListele().snapshotChanges().subscribe(data => {
        this.kayitlar = [];
        data.forEach(satir => {
          const y = { ...satir.payload.toJSON(), key: satir.key };
          this.kayitlar.push(y as Kayitlar);
        });
      });
    }
}
