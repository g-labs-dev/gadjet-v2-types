import { BranchCards } from '../../model';
import { BillingApproveData, BillingCard, Result } from '../../type';
declare type PARAMS = {
    hqId: number;
    branchId: number;
};
export declare type GET_LIST_PARAMS = PARAMS;
export declare type GET_LIST_QUERY = {};
export declare type GET_LIST_RESPONSE = {
    branchCards: BranchCards[];
};
export declare type ADD_PARAMS = PARAMS;
export declare type ADD_BODY = {
    card: BillingCard;
};
export declare type ADD_RESPONSE = Result;
export declare type DELETE_PARAMS = PARAMS & {
    branchCardId: number;
};
export declare type DELETE_RESPONSE = Result;
export declare type VALIDATE_PARAMS = PARAMS & {
    branchCardId: number;
};
export declare type VALIDATE_RESPONSE = Result;
export declare type UPDATE_BILLING_PARAMS = PARAMS & {
    branchCardId: number;
};
export declare type UPDATE_BILLING_RESPONSE = Result;
export declare type PAY_BILLING_PARAMS = PARAMS & {
    branchCardId: number;
};
export declare type PAY_BILLING_RESPONSE = Result & {
    result: BillingApproveData;
};
export {};
//# sourceMappingURL=card.d.ts.map