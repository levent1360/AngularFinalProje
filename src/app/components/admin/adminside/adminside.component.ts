import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adminside',
  templateUrl: './adminside.component.html',
  styleUrls: ['./adminside.component.css']
})
export class AdminsideComponent implements OnInit {

  constructor(public service: FirebaseService, public route:Router) { }

  ngOnInit(): void {
  }

  cikisYap() {
    this.service.oturumKapat().then(() => {
      localStorage.removeItem('user');
      localStorage.removeItem('yetki');
      indexedDB.deleteDatabase('firebaseLocalStorageDb');
      this.route.navigate(['']);
    })
  }
}
