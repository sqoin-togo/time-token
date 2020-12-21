import {Promotion} from "../promotions/promotion.model"
import {Activity} from "../activities/activity.model"




export interface Transaction {
    id?: number;
    id_user: number;
    id_promotion:number;
    date: Date;
    description: string;
    id_activity:number ;
    cost: number;
    type: string;
  }
  