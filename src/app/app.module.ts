import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { DetayComponent } from './components/detay/detay.component';
import { KayitekleComponent } from './components/admin/kayitekle/kayitekle.component';
import { KayitlarComponent } from './components/admin/kayitlar/kayitlar.component';
import { KayitduzenleComponent } from './components/admin/kayitduzenle/kayitduzenle.component';
import { UyelerComponent } from './components/admin/uyeler/uyeler.component';
import { KategorilerComponent } from './components/admin/kategoriler/kategoriler.component';
import { UyeolComponent } from './components/admin/uyeol/uyeol.component';
import { GirisyapComponent } from './components/admin/girisyap/girisyap.component';
import { YetkisizgirisComponent } from './components/admin/yetkisizgiris/yetkisizgiris.component';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AdminhomeComponent } from './components/admin/adminhome/adminhome.component';
import { AdminsideComponent } from './components/admin/adminside/adminside.component';
import { AyarlarComponent } from './components/admin/ayarlar/ayarlar.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarComponent,
    NavbarComponent,
    FooterComponent,
    DetayComponent,
    KayitekleComponent,
    KayitlarComponent,
    KayitduzenleComponent,
    UyelerComponent,
    KategorilerComponent,
    UyeolComponent,
    GirisyapComponent,
    YetkisizgirisComponent,
    AdminhomeComponent,
    AdminsideComponent,
    AyarlarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
