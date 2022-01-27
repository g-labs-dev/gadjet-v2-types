import { BranchCards } from '../../model';
import { Result } from '../../type';
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
    branchCard: Partial<BranchCards>;
};
export declare type ADD_RESPONSE = {
    branchCard: BranchCards;
};
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
export {};
//# sourceMappingURL=card.d.ts.map