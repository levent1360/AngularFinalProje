export class Kayitlar {
  key: string;
  IlanNo: string;
  IlanBaslik: string;
  EkleyenUid: string;
  IlanTipi: string;
  OdaSayisi: string;
  MKare: string;
  Fiyat: string;
  EsyaDurum: boolean;
  Isinma: string;
  IlanAciklama: string;
  Foto1: string;
  Foto2: string;
  Foto3: string;
  Il: string;
  Ilce: string;
  Konum: string;
  EklemeTarih: string;
  DuzenlemeTarih: string;
  GoruntulenmeSayisi: number;
}

export class Oda {
  key: string;
  OdaSayisi: string
}

export class İlanTipi {
  key: string;
  IlanTipi: string
}

export class UyeTipiM {
  key: string;
  UyeTipi: string
}

export class İlİlce {
  key: string;
  Il: string;
  Ilce: string;
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