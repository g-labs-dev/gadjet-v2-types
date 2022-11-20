/// <reference types="node" />
import { Contracts, Spaces } from '../../model';
import { Pagination, SpaceSummary } from '../../type';
import { SpaceSearch } from '../../type/search';
type PARAMS = {
    hqId: number;
    branchId: number;
};
export type GET_LIST_PARAMS = PARAMS;
export type GET_LIST_QUERY = Pagination & SpaceSearch;
export type GET_LIST_RESPONSE = {
    total: number;
    spaces: Spaces[];
};
export type GET_DETAIL_PARAMS = PARAMS & {
    spaceId: number;
};
export type GET_DETAIL_RESPONSE = Spaces;
export type GET_SUMMARY_PARAMS = PARAMS;
export type GET_SUMMARY_QUERY = {
    query: string;
    emptyFlag: boolean;
};
export type GET_SUMMARY_RESPONSE = SpaceSummary;
export type EXPORT_PARAMS = PARAMS;
export type EXPORT_QUERY = {
    query: string;
    emptyFlag: boolean;
};
export type EXPORT_RESPONSE = Buffer;
export type UPLOAD_PARAMS = PARAMS;
export type UPLOAD_BODY = {
    spaces: Partial<Spaces>[];
};
export type UPLOAD_RESPONSE = [number];
export type ADD_PARAMS = PARAMS;
export type ADD_BODY = {
    space: Partial<Spaces>;
};
export type ADD_RESPONSE = Spaces;
export type UPDATE_PARAMS = PARAMS & {
    spaceId: number;
};
export type UPDATE_BODY = {
    space: Partial<Spaces>;
};
export type UPDATE_RESPONSE = [number];
export type DELETE_PARAMS = PARAMS & {
    spaceId: number;
};
export type DELETE_RESPONSE = [number];
export type GET_CONTRACTS_PARAMS = PARAMS & {
    spaceId: number;
};
export type GET_CONTRACTS_QUERY = Pagination;
export type GET_CONTRACTS_RESPONSE = {
    total: number;
    contracts: Contracts[];
};
export {};
//# sourceMappingURL=space.d.ts.map