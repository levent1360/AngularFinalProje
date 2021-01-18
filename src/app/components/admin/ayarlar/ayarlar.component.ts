import { FirebaseService } from 'src/app/services/firebase.service';
import { UyeTipiM, İlİlce, Oda, İlanTipi } from './../../../models/firebase/firebase.module';
import { AfterContentInit,Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-ayarlar',
  templateUrl: './ayarlar.component.html',
  styleUrls: ['./ayarlar.component.css']
})
export class AyarlarComponent implements OnInit {
 
  seciliUyeTipi: UyeTipiM = new UyeTipiM()
  uyeTipler: UyeTipiM[];
  yeniuyeTipi: UyeTipiM = new UyeTipiM()
  yeniililce: İlİlce = new İlİlce();
  ililceler: İlİlce[];
  seciliIlIlce: İlİlce = new İlİlce();
  odalar: Oda[];
  seciliOda: Oda = new Oda();
  yeniOda: Oda = new Oda();
  ilanTipler: İlanTipi[];
  seciliIlanT: İlanTipi = new İlanTipi();
  yeniIlanT: İlanTipi = new İlanTipi();
  constructor(
    public service: FirebaseService,
    public toast:ToastrService) { }

  ngOnInit(): void {
    this.UyeTipiListele();
    this.ililceListele();
    this.OdaListele();
    this.ilantipiListele();
  }

  //üye tipi işlemleri
  uyeTipiekle() {
    this.service.uyeTipEkleService(this.yeniuyeTipi).then(s => {
      console.log(this.yeniuyeTipi);
      this.toast.success("Üye tipi başarıyla eklendi","Üye Tipi Ekleme İşlemi")
      this.yeniuyeTipi = new UyeTipiM()
    }).catch(err => {
      window.alert("bir hata var");
      console.log(err)
    });
  }

  uyeTipiSil(uyeTip: UyeTipiM) {
    if (uyeTip.UyeTipi == "Admin" || uyeTip.UyeTipi == "Süper") {
      console.log(uyeTip.UyeTipi + " yetkisi silinemez");
    } else {
      this.service.uyeTipSilService(uyeTip).then(() => {
        this.toast.success("üye tipi başarıyla silindi","Silme İşlemi",{
          timeOut: 1000,
          closeButton:true,
          progressBar:true
        })
      }).catch(err => {
        console.log(err)
      })
    }
  }

  UyeTipDuzenle(){
    this.service.uyeTipDuzenleService(this.seciliUyeTipi).then(()=>{
      this.toast.success("Üye tipi başarıyla düzenlendi","Düzenleme İşlemi",{
        timeOut: 1000,
        closeButton:true,
        progressBar:true
      })
    }).catch(err=>{
      console.log(err)
    })
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


  // il ileçeler

  ililceekle() {
    this.service.ililceEkleService(this.yeniililce).then(s => {
      this.toast.success("İl ve ilçe başarıyla eklendi","İl ve ilçe Ekleme İşlemi",{
      timeOut: 1000,
    })
    }).catch(err => {
      window.alert("bir hata var");
      console.log(err)
    });
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

  
  ililceDuzenle(){
    this.service.ililceDuzenleService(this.seciliIlIlce).then(()=>{
      this.toast.success("il ve ilce başarıyla düzenlendi","Düzenleme İşlemi",{
        timeOut: 1000,
        closeButton:true,
        progressBar:true
      })
    }).catch(err=>{
      console.log(err)
    })
  }

  IlIlceil(il: İlİlce) {
    this.service.IlSilService(il).then(() => {
      this.toast.success("il ve ilce başarıyla silindi","Silme İşlemi",{
        timeOut: 1000,
        closeButton:true,
        progressBar:true
      })
    }).catch(err => {
      console.log(err)
    })
  }


  secIlIlce(ilvalue) {
    return this.seciliIlIlce = ilvalue;
  }

  //oda işlemleri
  Odaekle() {
    this.service.OdaEkleService(this.yeniOda).then(o => {
      this.yeniOda = new Oda();
      this.toast.success("Oda başarıyla eklendi","Oda Ekleme İşlemi",{
        timeOut: 1000,
        closeButton:true,
        progressBar:true
      });
      
    }).catch(err => {
      this.toast.error("Oda eklenemedi","Oda Ekleme İşlemi",{
        timeOut: 1000,
        closeButton:true,
        progressBar:true
      })
      console.log(err)
    });
  }

  OdaDuzenle(){
    this.service.OdaDuzenleService(this.seciliOda).then(()=>{
      this.toast.success("Oda başarıyla düzenlendi","Düzenleme İşlemi",{
        timeOut: 1000,
        closeButton:true,
        progressBar:true
      })
    }).catch(err=>{
      console.log(err)
    })
  }

  OdaSil(oda: Oda) {
      this.service.OdaSilService(oda).then(() => {
        this.toast.success("oda başarıyla silindi","Silme İşlemi",{
          timeOut: 1000,
          closeButton:true,
          progressBar:true
        })
      }).catch(err => {
        console.log(err)
      })
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

  secOda(oda) {
    return this.seciliOda = oda;
  }

// ilan tipi
  ilantipiekle() {
    this.service.ilanTipEkleService(this.yeniIlanT).then(s => {
      this.toast.success("İlan tipi başarıyla eklendi","İl ve ilçe Ekleme İşlemi",{
      timeOut: 1000,
    })
    this.yeniIlanT=new İlanTipi();
    }).catch(err => {
      window.alert("bir hata var");
      console.log(err)
    });
  }
  ilantipiListele() {
    this.service.ilanTipListeleSevice().snapshotChanges().subscribe(data => {
      this.ilanTipler = [];
      data.forEach(satir => {
        const y = { ...satir.payload.toJSON(), key: satir.key };
        this.ilanTipler.push(y as İlanTipi);
      });
    });
  }

  
  ilanTipiDuzenle(){
    this.service.ilanTipDuzenleService(this.seciliIlanT).then(()=>{
      this.toast.success("ilan tipi başarıyla düzenlendi","Düzenleme İşlemi",{
        timeOut: 1000,
        closeButton:true,
        progressBar:true
      })
    }).catch(err=>{
      console.log(err)
    })
  }

  IlanTipSil(it: İlanTipi) {
    this.service.ilanTipSilService(it).then(() => {
      this.toast.success("ilan tipi başarıyla silindi","Silme İşlemi",{
        timeOut: 1000,
        closeButton:true,
        progressBar:true
      })
    }).catch(err => {
      console.log(err)
    })
  }


  secIlanTip(itvalue) {
    return this.seciliIlanT = itvalue;
  }


}
