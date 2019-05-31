import { IAddress } from './IAddress';

export interface IPatient {
  id: number;
  registeredDate: string;
  birthDate: string;
  firstName: string;
  lastName: string;
  doctor: number;
  addresses: IAddress[];
}
