import { Notices } from '../../model';
import { Pagination } from '../../type';
type PARAMS = {
    hqId: number;
};
export type GET_LIST_PARAMS = PARAMS;
export type GET_LIST_QUERY = Pagination & {
    query: string;
    writeDate: [string, string];
};
export type GET_LIST_RESPONSE = {
    total: number;
    notices: Notices[];
};
export type GET_DETAIL_PARAMS = PARAMS & {
    noticeId: number;
};
export type GET_DETAIL_RESPONSE = Notices;
export type ADD_PARAMS = PARAMS;
export type ADD_BODY = {
    notice: Partial<Notices>;
};
export type ADD_RESPONSE = Notices;
export type UPDATE_PARAMS = PARAMS & {
    noticeId: number;
};
export type UPDATE_BODY = {
    notice: Partial<Notices>;
};
export type UPDATE_RESPONSE = [number];
export type DELETE_PARAMS = PARAMS & {
    noticeId: number;
};
export type DELETE_RESPONSE = [number];
export {};
//# sourceMappingURL=notice.d.ts.map