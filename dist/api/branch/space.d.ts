import { Contracts, Spaces } from '../../model';
import { Pagination, SpaceSummary } from '../../type';
declare type PARAMS = {
    hqId: number;
    branchId: number;
};
export declare type GET_LIST_PARAMS = PARAMS;
export declare type GET_LIST_QUERY = Pagination & {
    query: string;
    emptyFlag: boolean;
};
export declare type GET_LIST_RESPONSE = {
    total: number;
    spaces: Spaces[];
};
export declare type GET_DETAIL_PARAMS = PARAMS & {
    spaceId: number;
};
export declare type GET_DETAIL_RESPONSE = Spaces;
export declare type GET_SUMMARY_PARAMS = PARAMS;
export declare type GET_SUMMARY_QUERY = {
    query: string;
    emptyFlag: boolean;
};
export declare type GET_SUMMARY_RESPONSE = SpaceSummary;
export declare type EXPORT_PARAMS = PARAMS;
export declare type EXPORT_QUERY = {
    query: string;
    emptyFlag: boolean;
};
export declare type EXPORT_RESPONSE = any;
export declare type UPLOAD_PARAMS = PARAMS;
export declare type UPLOAD_BODY = {
    spaces: Partial<Spaces>[];
};
export declare type UPLOAD_RESPONSE = [number];
export declare type ADD_PARAMS = PARAMS;
export declare type ADD_BODY = {
    space: Pick<Spaces, 'spaceTypeId' | 'name' | 'price' | 'area' | 'capacity' | 'imageId'>;
};
export declare type ADD_RESPONSE = Spaces;
export declare type UPDATE_PARAMS = PARAMS & {
    spaceId: number;
};
export declare type UPDATE_BODY = {
    space: Pick<Spaces, 'spaceTypeId' | 'name' | 'price' | 'area' | 'capacity' | 'imageId'>;
};
export declare type UPDATE_RESPONSE = [number];
export declare type DELETE_PARAMS = PARAMS & {
    spaceId: number;
};
export declare type DELETE_RESPONSE = [number];
export declare type GET_CONTRACTS_PARAMS = PARAMS & {
    spaceId: number;
};
export declare type GET_CONTRACTS_QUERY = Pagination;
export declare type GET_CONTRACTS_RESPONSE = {
    total: number;
    contracts: Contracts[];
};
export {};
//# sourceMappingURL=space.d.ts.map