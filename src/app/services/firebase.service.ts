import { Kayitlar, Uyeler, UyeTipiM } from './../models/firebase/firebase.module';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import {AngularFireAuth} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  
  private dbKayit = "/kayitlar";
  private dbUye = "/uyeler";
  private dbUyeTip = "/uyeTipler";
  kayitRef: AngularFireList<Kayitlar> = null;
  uyeRef: AngularFireList<Uyeler> = null;
  uyeTipRef: AngularFireList<UyeTipiM> = null;

  constructor(
    public db: AngularFireDatabase, 
    public fbAuth:AngularFireAuth
    ) 
  { 
    this.kayitRef = this.db.list(this.dbKayit), 
    this.uyeRef = this.db.list(this.dbUye), 
    this.uyeTipRef = this.db.list(this.dbUyeTip) 
  }

  // oturum işlemleri
  oturumAc(uye:Uyeler){
    return this.fbAuth.signInWithEmailAndPassword(uye.Email,uye.Sifre);
  }

  oturumKapat(){
    return this.fbAuth.signOut();
  }

  OturumKontrol(){
    if(localStorage.getItem('user')){
      return true;
    }
    else{
      return false;
    }
  }

  uyeOl(uye:Uyeler) {
    return this.fbAuth.createUserWithEmailAndPassword(uye.Email, uye.Sifre);
  }

  //Kayıt İşlemleri
  kayitListele() {
    return this.kayitRef;
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
  uyeTipListele() {
    return this.uyeTipRef;
  }
  uyeTipEkleService(ut:UyeTipiM) {
    return this.uyeTipRef.push(ut);
  }
  uyeEkle(u: Uyeler) {
    return this.uyeRef.push(u);
  }
  uyeDuzenle(u: Uyeler) {
    return this.uyeRef.update(u.key, u);
  }
  uyeSil(key: string) {
    return this.uyeRef.remove(key);
  }

}
