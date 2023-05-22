import { Additions, Contracts } from '../../model';
import { Pagination } from '../../type';
import { AdditionSearch } from '../../type/search';
type PARAMS = {
    hqId: number;
    branchId: number;
};
export type GET_LIST_PARAMS = PARAMS;
export type GET_LIST_QUERY = Pagination & AdditionSearch;
export type GET_LIST_RESPONSE = {
    total: number;
    additions: Additions[];
};
export type GET_DETAIL_PARAMS = PARAMS & {
    additionId: number;
};
export type GET_DETAIL_RESPONSE = Additions;
export type ADD_PARAMS = PARAMS;
export type ADD_BODY = {
    addition: Partial<Additions>;
};
export type ADD_RESPONSE = Additions;
export type UPDATE_PARAMS = PARAMS & {
    additionId: number;
};
export type UPDATE_BODY = {
    addition: Partial<Additions>;
};
export type UPDATE_RESPONSE = [number];
export type DELETE_PARAMS = PARAMS & {
    additionId: number;
};
export type DELETE_RESPONSE = [number];
export type GET_CONTRACTS_PARAMS = PARAMS & {
    additionId: number;
};
export type GET_CONTRACTS_QUERY = Pagination;
export type GET_CONTRACTS_RESPONSE = {
    total: number;
    contracts: Contracts[];
};
export {};
//# sourceMappingURL=addition.d.ts.map