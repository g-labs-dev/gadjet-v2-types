import { BranchCards, Branches } from '../../model';
import { BillingCard } from '../../type';
declare type PARAMS = {
    hqId: number;
};
export declare type GET_LIST_PARAMS = PARAMS;
export declare type GET_LIST_QUERY = {};
export declare type GET_LIST_RESPONSE = Branches[];
export declare type GET_DETAIL_PARAMS = PARAMS & {
    branchId: number;
};
export declare type GET_DETAIL_RESPONSE = Branches;
export declare type ADD_PARAMS = PARAMS;
export declare type ADD_BODY = {
    branch: Partial<Branches>;
    managerId: number;
};
export declare type ADD_RESPONSE = Branches;
export declare type ADD_CARD_PARAMS = PARAMS;
export declare type ADD_CARD_BODY = {
    card: BillingCard;
} & {
    contact: string;
    email: string;
    name: string;
};
export declare type ADD_CARD_RESPONSE = BranchCards;
export {};
//# sourceMappingURL=branch.d.ts.map