import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';
import { Kayitlar, Oda, İlanTipi, İlİlce } from 'src/app/models/firebase/firebase.module';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-kayitekle',
  templateUrl: './kayitekle.component.html',
  styleUrls: ['./kayitekle.component.css']
})
export class KayitekleComponent implements OnInit {

  esyaDurumu = [
    { name: "Eşyalı" },
    { name: "Eşyasız" }
  ];
  ililceler: İlİlce[];
  odalar: Oda[];
  ilanTipler: İlanTipi[];
  yeniKayit:Kayitlar=new Kayitlar()
  constructor(public service:FirebaseService, public toast:ToastrService,public route:Router) { }



  yenikayitekle(){
    this.yeniKayit.EklemeTarih=this.tarih();
    this.yeniKayit.DuzenlemeTarih=this.tarih();
    var user = JSON.parse(localStorage.getItem("user"));
    this.yeniKayit.EkleyenUid = user.uid;
    this.service.kayitEkle(this.yeniKayit).then(()=>{
      this.toast.success("Kayıt Eklendi","Ekleme İşlemi",{
        timeOut: 1000,
        closeButton:true,
        progressBar:true
      })
    this.route.navigate(['yonetici/kayitlar']);
    }).catch(err=>{
      console.log(err)
    })

  }

  tarih(){
    var t= new Date();
    return t.getTime().toString();
  }


  ngOnInit(): void {
    this.OdaListele();
    this.ililceListele();
    this.IlanTipListele();
  }

  ililceListele() {
    this.service.ililceListeleService().snapshotChanges().subscribe(data => {
      this.ililceler = [];
      data.forEach(satir => {
        const y = { ...satir.payload.toJSON(), key: satir.key };
        this.ililceler.push(y as İlİlce);
      });
    });
  }
  OdaListele() {
    this.service.OdaListeleServis().snapshotChanges().subscribe(data => {
      this.odalar = [];
      data.forEach(satir => {
        const y = { ...satir.payload.toJSON(), key: satir.key };
        this.odalar.push(y as Oda);
      });
    });
  }
  IlanTipListele() {
    this.service.ilanTipListeleSevice().snapshotChanges().subscribe(data => {
      this.ilanTipler = [];
      data.forEach(satir => {
        const y = { ...satir.payload.toJSON(), key: satir.key };
        this.ilanTipler.push(y as İlanTipi);
      });
    });
  }

}
