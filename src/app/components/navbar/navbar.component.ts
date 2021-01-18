import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';
import { Component, OnInit } from '@angular/core';
import { Uyeler } from 'src/app/models/firebase/firebase.module';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  uye:Uyeler=new Uyeler();
  constructor(public service: FirebaseService, public route: Router) { }

  OturumKapat() {
    this.service.oturumKapat().then(() => {
      localStorage.removeItem('user');
      localStorage.removeItem('yetki');
      indexedDB.deleteDatabase('firebaseLocalStorageDb');
      this.route.navigate(['/']);
    });
  }

  ngOnInit(): void {

  }

}
