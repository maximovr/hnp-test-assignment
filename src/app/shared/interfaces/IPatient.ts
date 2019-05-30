import { IAddress } from './IAddress';

export interface IPatient {
  id: number;
  registeredDate: string;
  firstName: string;
  lastName: string;
  doctor: number;
  addresses: IAddress[];
}
