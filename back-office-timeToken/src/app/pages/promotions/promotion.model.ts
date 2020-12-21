import { Company } from "../companies/company.model";

export interface Promotion {
  id?: number;
  ref?: string;
  name?: string;
  discount?: number;
  description?: string;
  company?: Company;
  start_date?: Date;
  expiration_date?: Date;
  value?: number;
  category?: string;
  image_src: string;
  state?: string;
}
