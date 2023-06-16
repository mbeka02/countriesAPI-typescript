interface Native {
  [key: string]: {
    official: string;
    common: string;
  };
}

interface Currencies {
  name: string;
  symbol: string;
}

interface Country {
  name: {
    common: string;
  };
  population: number;
  region: string;
  capital?: string;
  subregion?: string;
  tld?: string;

  currencies?: {
    [key: string]: Currencies;
  };
  languages: { [key: string]: string };
  borders?: Array;
  flags: {
    png: string;
  };
  nativeName?: Native;
}

export { Country, Native };
