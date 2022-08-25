import { Notices } from '../../model';
import { Pagination } from '../../type';
declare type PARAMS = {
    hqId: number;
};
export declare type GET_LIST_PARAMS = PARAMS;
export declare type GET_LIST_QUERY = Pagination & {
    query: string;
    writeDate: [string, string];
};
export declare type GET_LIST_RESPONSE = {
    total: number;
    notices: Notices[];
};
export declare type GET_DETAIL_PARAMS = PARAMS & {
    noticeId: number;
};
export declare type GET_DETAIL_RESPONSE = Notices;
export declare type ADD_PARAMS = PARAMS;
export declare type ADD_BODY = {
    notice: Partial<Notices>;
};
export declare type ADD_RESPONSE = Notices;
export declare type UPDATE_PARAMS = PARAMS & {
    noticeId: number;
};
export declare type UPDATE_BODY = {
    notice: Partial<Notices>;
};
export declare type UPDATE_RESPONSE = [number];
export declare type DELETE_PARAMS = PARAMS & {
    noticeId: number;
};
export declare type DELETE_RESPONSE = [number];
export {};
//# sourceMappingURL=notice.d.ts.map