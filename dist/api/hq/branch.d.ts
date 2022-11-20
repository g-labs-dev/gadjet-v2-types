import { BranchCards, Branches } from '../../model';
import { BillingCard } from '../../type';
type PARAMS = {
    hqId: number;
};
export type GET_LIST_PARAMS = PARAMS;
export type GET_LIST_QUERY = {};
export type GET_LIST_RESPONSE = Branches[];
export type GET_DETAIL_PARAMS = PARAMS & {
    branchId: number;
};
export type GET_DETAIL_RESPONSE = Branches;
export type ADD_PARAMS = PARAMS;
export type ADD_BODY = {
    branch: Partial<Branches>;
    managerId: number;
};
export type ADD_RESPONSE = Branches;
export type ADD_CARD_PARAMS = PARAMS;
export type ADD_CARD_BODY = {
    card: BillingCard;
} & {
    contact: string;
    email: string;
    name: string;
};
export type ADD_CARD_RESPONSE = BranchCards;
export {};
//# sourceMappingURL=branch.d.ts.map