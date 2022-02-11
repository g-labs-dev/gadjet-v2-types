import { Hqs } from '../../model';
declare type PARAMS = {
    hqId: number;
};
export declare type GET_LIST_PARAMS = {};
export declare type GET_LIST_RESPONSE = Hqs[];
export declare type GET_DETAIL_PARAMS = PARAMS;
export declare type GET_DETAIL_RESPONSE = Hqs;
export declare type ADD_PARAMS = PARAMS;
export declare type ADD_BODY = {
    hq: Partial<Hqs>;
};
export declare type ADD_RESPONSE = Hqs;
export declare type UPDATE_PARAMS = PARAMS;
export declare type UPDATE_BODY = {
    hq: Partial<Hqs>;
};
export declare type UPDATE_RESPONSE = [number];
export declare type DELETE_PARAMS = PARAMS;
export declare type DELETE_RESPONSE = [number];
export {};
//# sourceMappingURL=hq.d.ts.map