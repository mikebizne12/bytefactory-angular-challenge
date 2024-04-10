import { IAddressData } from './AddressData';
import { ICompanyData } from './CompanyData';

export interface IUserData {
  id: number;
  firstname: string;
  surname: string;
  username: string;
  email: string;
  address: IAddressData;
  phone: string;
  website: string;
  company: ICompanyData;
}
