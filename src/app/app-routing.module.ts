import { AyarlarComponent } from './components/admin/ayarlar/ayarlar.component';
import { UyelerComponent } from './components/admin/uyeler/uyeler.component';
import { AdminhomeComponent } from './components/admin/adminhome/adminhome.component';
import { KayitlarComponent } from './components/admin/kayitlar/kayitlar.component';
import { GirisyapComponent } from './components/admin/girisyap/girisyap.component';
import { UyeolComponent } from './components/admin/uyeol/uyeol.component';
import { DetayComponent } from './components/detay/detay.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KayitekleComponent } from './components/admin/kayitekle/kayitekle.component';
import { KayitduzenleComponent } from './components/admin/kayitduzenle/kayitduzenle.component';

const routes: Routes = [
  {
    path: "", component: HomeComponent
  },
  {
    path: "detay", component: DetayComponent
  },
  {
    path: "uyeol", component: UyeolComponent
  },
  {
    path: 'yonetici', component: AdminhomeComponent, children: [
      { path: "uyeler", component: UyelerComponent },
      {
        path: "kayitlar", component: KayitlarComponent, children: [
          { path: "kayitekle", component: KayitekleComponent },
          { path: "kayitduzenle", component: KayitduzenleComponent }
        ]
      },
      { path: "ayarlar", component: AyarlarComponent }
    ]
  },
  {
    path: "kayitekle", component: KayitekleComponent
  },
  {
    path: "giris", component: GirisyapComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
