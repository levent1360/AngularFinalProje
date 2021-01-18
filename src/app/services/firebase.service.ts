import { Kayitlar, Oda, Uyeler, UyeTipiM, İlanTipi, İlİlce } from './../models/firebase/firebase.module';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {


  private dbKayit = "/kayitlar";
  private dbUye = "/uyeler";
  private dbUyeTip = "/uyeTipler";
  private dbIlanTip = "/ilanTipler";
  private dbIlIlce = "/illerveilceler";
  private dbOda = "/Odalar";
  kayitRef: AngularFireList<Kayitlar> = null;
  uyeRef: AngularFireList<Uyeler> = null;
  uyeTipRef: AngularFireList<UyeTipiM> = null;
  ilanTipRef: AngularFireList<İlanTipi> = null;
  ililceRef: AngularFireList<İlİlce> = null;
  OdaRef: AngularFireList<Oda> = null;

  constructor(
    public db: AngularFireDatabase,
    public fbAuth: AngularFireAuth
  ) {
    this.kayitRef = this.db.list(this.dbKayit),
      this.uyeRef = this.db.list(this.dbUye),
      this.ililceRef = this.db.list(this.dbIlIlce),
      this.OdaRef = this.db.list(this.dbOda),
      this.ilanTipRef = this.db.list(this.dbIlanTip),
      this.uyeTipRef = this.db.list(this.dbUyeTip)
  }

  // oturum işlemleri
  oturumAc(uye: Uyeler) {
    return this.fbAuth.signInWithEmailAndPassword(uye.Email, uye.Sifre);
  }

  oturumKapat() {
    return this.fbAuth.signOut();
  }

  OturumAcan() {
    return JSON.parse(localStorage.getItem('user')).email
  }

  OturumKontrol() {
    if (localStorage.getItem('user')) {
      return true;
    }
    else {
      return false;
    }
  }

  isAdmin() {
    var yetki = JSON.parse(localStorage.getItem('yetki')).UyeTipi;
    if (yetki == "Süper" || yetki == "Admin") {
      return true;
    }
    else {
      return false;
    }
  }

  uyeOl(uye: Uyeler) {
    return this.fbAuth.createUserWithEmailAndPassword(uye.Email, uye.Sifre);
  }

  //Kayıt İşlemleri
  kayitListele() {
    return this.kayitRef;
  }
  KayitByKey(key: string) {
    return this.db.object("/kayitlar/" + key);
  }
  kayitEkle(k: Kayitlar) {
    return this.kayitRef.push(k);
  }
  kayitDuzenle(k: Kayitlar) {
    return this.kayitRef.update(k.key, k);
  }
  kayitSil(key: string) {
    return this.kayitRef.remove(key);
  }


  // üye işlemleri
  uyeListele() {
    return this.uyeRef;
  }
  uyeEkle(u: Uyeler) {
    return this.uyeRef.push(u);
  }
  uyeByKey(key: string) {
    return this.db.object("/uyeler/" + key);
  }
  uyeByUid(uid: string) {
    return this.db.list(this.dbUye, q => q.orderByChild('Uid').equalTo(uid));
  }
  uyeDuzenle(u: Uyeler) {
    return this.uyeRef.update(u.key, u);
  }
  uyeSil(key: string) {
    return this.uyeRef.remove(key);
  }

  // Üye Tipi
  uyeTipListele() {
    return this.uyeTipRef;
  }
  uyeTipEkleService(ut: UyeTipiM) {
    return this.uyeTipRef.push(ut);
  }
  uyeTipDuzenleService(ut: UyeTipiM) {
    return this.uyeTipRef.update(ut.key, ut);
  }
  uyeTipSilService(ut: UyeTipiM) {
    return this.uyeTipRef.remove(ut.key);
  }

  //İl İlçe
  ililceListeleService() {
    return this.ililceRef;
  }
  ililceEkleService(ii: İlİlce) {
    return this.ililceRef.push(ii);
  }
  ililceDuzenleService(ii: İlİlce) {
    return this.ililceRef.update(ii.key, ii);
  }
  IlSilService(ii: İlİlce) {
    return this.ililceRef.remove(ii.key);
  }


  // Oda servis
  OdaListeleServis() {
    return this.OdaRef;
  }
  OdaEkleService(o: Oda) {
    return this.OdaRef.push(o);
  }
  OdaDuzenleService(o: Oda) {
    return this.OdaRef.update(o.key, o);
  }
  OdaSilService(o: Oda) {
    return this.OdaRef.remove(o.key);
  }

  // İlan Tipi
  ilanTipListeleSevice() {
    return this.ilanTipRef;
  }
  ilanTipEkleService(it: İlanTipi) {
    return this.ilanTipRef.push(it);
  }
  ilanTipDuzenleService(it: İlanTipi) {
    return this.ilanTipRef.update(it.key, it);
  }
  ilanTipSilService(it: İlanTipi) {
    return this.ilanTipRef.remove(it.key);
  }

}
