export interface IAddressData {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: IGeolocationData;
}

interface IGeolocationData {
  lat: string;
  lng: string;
}
