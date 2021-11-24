import { Additions, Contracts } from '../../model';
import { Pagination } from '../../type';
declare type PARAMS = {
    hqId: number;
    branchId: number;
};
export declare type GET_LIST_PARAMS = PARAMS;
export declare type GET_LIST_QUERY = Pagination & {
    query: string;
};
export declare type GET_LIST_RESPONSE = {
    total: number;
    additions: Additions[];
};
export declare type GET_DETAIL_PARAMS = PARAMS & {
    additionId: number;
};
export declare type GET_DETAIL_RESPONSE = Additions;
export declare type ADD_PARAMS = PARAMS;
export declare type ADD_BODY = {
    addition: Partial<Additions>;
};
export declare type ADD_RESPONSE = Additions;
export declare type UPDATE_PARAMS = PARAMS & {
    additionId: number;
};
export declare type UPDATE_BODY = {
    addition: Partial<Additions>;
};
export declare type UPDATE_RESPONSE = [number];
export declare type DELETE_PARAMS = PARAMS & {
    additionId: number;
};
export declare type DELETE_RESPONSE = [number];
export declare type GET_CONTRACTS_PARAMS = PARAMS & {
    additionId: number;
};
export declare type GET_CONTRACTS_QUERY = Pagination;
export declare type GET_CONTRACTS_RESPONSE = {
    total: number;
    contracts: Contracts[];
};
export {};
//# sourceMappingURL=addition.d.ts.map