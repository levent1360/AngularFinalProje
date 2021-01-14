import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mesaj, Uyeler } from 'src/app/models/firebase/firebase.module';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-girisyap',
  templateUrl: './girisyap.component.html',
  styleUrls: ['./girisyap.component.css']
})
export class GirisyapComponent implements OnInit {

  public info = new Mesaj(true, "", "");
  uye: Uyeler = new Uyeler()


  constructor(public service: FirebaseService, private router: Router) { }

  GirisYap(){
    this.service.oturumAc(this.uye).then(u=>{
      localStorage.setItem("user", JSON.stringify(u.user));
      this.router.navigate(['/']);
    }).catch(err=>{
      return this.info=new Mesaj(false,"Kullanıcı Adı veya Şifre hatalı","alert alert-danger")
    })
  }

  ngOnInit(): void {
  }

}
