import {Policy} from './policy';

export interface UserPolicy {
  policyId: string;
  amountPaid: number;
  policyEndDate: Date;
}
