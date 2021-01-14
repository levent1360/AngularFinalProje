import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mesaj, Uyeler } from 'src/app/models/firebase/firebase.module';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-uyeol',
  templateUrl: './uyeol.component.html',
  styleUrls: ['./uyeol.component.css']
})
export class UyeolComponent implements OnInit {


  public info = new Mesaj(true, "", "");
  uye: Uyeler = new Uyeler()


  constructor(public service: FirebaseService, private router: Router) { }

  UyeOl() {
    console.log(this.uye.AdSoyad,this.uye.Email,this.uye.SozlesmeKabul )
    if (this.uye.SozlesmeKabul==false) {
      this.info = new Mesaj(false, "Boş alanları doldurunuz", "alert alert-danger");
      return this.info;
    } else {
      this.service.uyeOl(this.uye).then(u => {
        u.user.updateProfile({ displayName: this.uye.AdSoyad });
        this.uye.Uid = u.user.uid;
        this.uye.KayitTarih = u.user.metadata.creationTime;
        this.uye.SonGirisTarih = u.user.metadata.lastSignInTime;
        this.uye.GuncellemeTarih = u.user.metadata.creationTime;
        this.uye.UyeTipi = "Üye";
        console.log(this.uye)
        this.service.uyeEkle(this.uye);
        this.router.navigate(['/giris'])
        this.info = new Mesaj(false, "Kayıt Başarılı.", "alert alert-success");
        return this.info;
      }).catch(err => {
        console.log(err);
        if (err.code == "auth/weak-password") {
          this.info = new Mesaj(false, "Parola en az 6 karakter olmalıdır.", "alert alert-danger");
          return this.info;
        } else if (err.code == "auth/invalid-email") {
          this.info = new Mesaj(false, "Geçersiz e-posta biçimi", "alert alert-danger");
          return this.info;
        } else { }
      });
    }

  }


  ngOnInit(): void {
  }

}
