export class Kayitlar {
  key: string;
  IlanNo: string;
  IlanBaslik: string;
  EklemeTarih: string;
  DuzenlemeTarih: string;
  GoruntulenmeSayisi: number;
  EkleyenUid: string;
  IlanTipi: string;
  OdaSayisi: string;
  MKare: string;
  Fiyat: string;
  EsyaDurum: boolean;
  Isinma: string;
  IlanAciklama: string;
  Il: string;
  Ilce: string;
  Konum: string;
  Foto1: string;
  Foto2: string;
  Foto3: string;
}

export class Oda {
  key: string;
  OdaSayisi: string
}

export class İlanTipi {
  key: string;
  İlanTipi: string
}

export class UyeTipiM {
  key: string;
  UyeTipi: string
}

export class İlİlce {
  key: string;
  İl: string;
  İlkodu: string;
  İlce: string;
}

export class Uyeler {
  key: string;
  Uid: string;
  AdSoyad: string;
  UyeTipi: string;
  Email: string;
  Sifre: string;
  KayitTarih: string;
  SonGirisTarih: string;
  GuncellemeTarih: string;
  SozlesmeKabul: boolean;
  Il: string;
  Ilce: string;
  Adres: string;
  Tel: string;
}


export class Mesaj {
  durum: boolean;
  mesaj: string;
  bclass: string;
  constructor(durum: boolean, mesaj: string, bclass: string) {
    this.durum = durum;
    this.mesaj = mesaj;
    this.bclass = bclass;
  }
}