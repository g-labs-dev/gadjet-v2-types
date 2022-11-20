import { Hqs } from '../../model';
type PARAMS = {
    hqId: number;
};
export type GET_LIST_PARAMS = {};
export type GET_LIST_RESPONSE = Hqs[];
export type GET_DETAIL_PARAMS = PARAMS;
export type GET_DETAIL_RESPONSE = Hqs;
export type ADD_PARAMS = PARAMS;
export type ADD_BODY = {
    hq: Partial<Hqs>;
};
export type ADD_RESPONSE = Hqs;
export type UPDATE_PARAMS = PARAMS;
export type UPDATE_BODY = {
    hq: Partial<Hqs>;
};
export type UPDATE_RESPONSE = Hqs;
export type DELETE_PARAMS = PARAMS;
export type DELETE_RESPONSE = [number];
export {};
//# sourceMappingURL=hq.d.ts.map