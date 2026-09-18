export interface TextoLocalizado {
  espanol: string;
  [key: string]: string;
}

export interface Moneda {
  nombre: TextoLocalizado;
  codigo: string;
  codigo_pais: string;
}

export interface Pais {
  id: number;
  nombre: TextoLocalizado;
  capital: TextoLocalizado;
  region: TextoLocalizado;
  lenguaje: TextoLocalizado;
  poblacion: string;
  bandera: string;
  monedas: Moneda[];
  descripcion: TextoLocalizado;
}

export interface Maravilla {
  id: string;
  nombre: string;
  pais: string;
  imagen: string;
  latitud: number;
  longitud: number;
  Consejos: string[];
}

export type PaisesStackParamList = {
  Paises: undefined;
  DetallePais: {
    country: Pais;
  };
};

export type MaravillasStackParamList = {
  Maravillas: undefined;
  Consejos: {
    tips: Maravilla;
  };
};

export interface ListaPaisesProps {
  navigation: any;
}

export interface DetallePaisProps {
  route: any;
  navigation: any;
}

export interface ListaMaravillasProps {
  navigation: any;
}

export interface DetalleMaravillasProps {
  route: any;
  navigation: any;
}