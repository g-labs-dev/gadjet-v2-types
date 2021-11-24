import { Branches } from '../../model';
declare type PARAMS = {
    hqId: number;
};
export declare type GET_LIST_PARAMS = PARAMS;
export declare type GET_LIST_QUERY = {};
export declare type GET_LIST_RESPONSE = Branches[];
export declare type ADD_PARAMS = PARAMS;
export declare type ADD_BODY = {
    branch: Partial<Branches>;
};
export declare type ADD_RESPONSE = Branches;
export {};
//# sourceMappingURL=branch.d.ts.map