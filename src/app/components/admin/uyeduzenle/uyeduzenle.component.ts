import { UyeTipiM, İlİlce } from './../../../models/firebase/firebase.module';
import { Uyeler } from 'src/app/models/firebase/firebase.module';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-uyeduzenle',
  templateUrl: './uyeduzenle.component.html',
  styleUrls: ['./uyeduzenle.component.css']
})
export class UyeduzenleComponent implements OnInit {
  yetkiler:UyeTipiM[];
  ililceler: İlİlce[];
  key: string;
  seciliUye: Uyeler = new Uyeler();
 
  constructor(
    public route: ActivatedRoute,
    public servis: FirebaseService,
    public router: Router,
    public toast:ToastrService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(p => {
      this.key = p.key;
      this.UyeGetir();
    });
    this.yetkiListele();
    this.ililceListele();
  }

  UyeGetir() {
    this.servis.uyeByKey(this.key).snapshotChanges().subscribe(data => {
      const y = { ...data.payload.toJSON(), key: this.key };
      this.seciliUye = (y as Uyeler);
    });
  }

  uyeDuzenle() {
    this.seciliUye.GuncellemeTarih=this.tarih();
    this.servis.uyeDuzenle(this.seciliUye).then(() => {
      this.toast.success("Üye başarıyla güncellendi","Düzenleme İşlemi",{
        timeOut: 1000,
      })
     // this.seciliUye=new Uyeler();
      this.router.navigate(['/yonetici/uyeler']);
    }).catch(err=>{
      this.toast.error("Hata oldu","Düzenleme İşlemi",{
        timeOut: 1000,
      })
    });
  }

  
  tarih(){
    var t= new Date();
    return t.getTime().toString();
  }


  yetkiListele() {
    this.servis.uyeTipListele().snapshotChanges().subscribe(data => {
      this.yetkiler = [];
      data.forEach(satir => {
        const y = { ...satir.payload.toJSON(), key: satir.key };
        this.yetkiler.push(y as UyeTipiM);
      });
    });
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
}
