import { AccessLogs } from '../../model';
import { Pagination } from '../../type';
import { AccessLogSearch } from '../../type/search';
type PARAMS = {
    hqId: number;
    branchId: number;
};
export type GET_LIST_PARAMS = PARAMS;
export type GET_LIST_QUERY = Pagination & AccessLogSearch;
export type GET_LIST_RESPONSE = {
    total: number;
    accessLogs: AccessLogs[];
};
export type ADD_PARAMS = PARAMS;
export type ADD_BODY = {
    accessLog: Partial<AccessLogs>;
};
export type ADD_RESPONSE = AccessLogs;
export {};
//# sourceMappingURL=access-log.d.ts.map