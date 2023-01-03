import { BranchCards } from '../../model';
import { BillingApproveResponseData, BillingCard, Result } from '../../type';
type PARAMS = {
    hqId: number;
    branchId: number;
};
export type GET_LIST_PARAMS = PARAMS;
export type GET_LIST_QUERY = {};
export type GET_LIST_RESPONSE = {
    branchCards: BranchCards[];
};
export type ADD_PARAMS = PARAMS;
export type ADD_BODY = {
    card: BillingCard;
};
export type ADD_RESPONSE = Result;
export type DELETE_PARAMS = PARAMS & {
    branchCardId: number;
};
export type DELETE_RESPONSE = Result;
export type VALIDATE_PARAMS = PARAMS & {
    branchCardId: number;
};
export type VALIDATE_RESPONSE = Result;
export type UPDATE_BILLING_PARAMS = PARAMS & {
    branchCardId: number;
};
export type UPDATE_BILLING_RESPONSE = Result;
export type PAY_BILLING_PARAMS = PARAMS & {
    branchCardId: number;
};
export type PAY_BILLING_RESPONSE = Result & {
    result: BillingApproveResponseData;
};
export {};
//# sourceMappingURL=card.d.ts.map