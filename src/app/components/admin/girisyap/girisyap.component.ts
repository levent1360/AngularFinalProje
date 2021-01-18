import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
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
  uid:string;
  uye: Uyeler = new Uyeler()


  constructor(public service: FirebaseService, private router: Router) { }

  GirisYap(){
    this.service.oturumAc(this.uye).then(u=>{
      this.uid=u.user.uid;
      localStorage.setItem("user", JSON.stringify(u.user));
      var x=this.service.uyeByUid(this.uid).snapshotChanges().subscribe(data=>{
        const y = { ...data[0].payload.toJSON(), key: this.uid };
        localStorage.setItem("yetki",JSON.stringify(y.UyeTipi))
      });
      
      this.router.navigate(['/']);
    }).catch(err=>{
      return this.info=new Mesaj(false,"Kullanıcı Adı veya Şifre hatalı","alert alert-danger")
    })
  }

  ngOnInit(): void {
  }

}
