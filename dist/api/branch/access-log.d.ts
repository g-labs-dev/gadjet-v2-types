import { AccessLogs } from '../../model';
import { Pagination } from '../../type';
declare type PARAMS = {
    hqId: number;
    branchId: number;
};
export declare type GET_LIST_PARAMS = PARAMS;
export declare type GET_LIST_QUERY = Pagination & {
    datetime: [string, string];
};
export declare type GET_LIST_RESPONSE = {
    total: number;
    accessLogs: AccessLogs[];
};
export declare type ADD_PARAMS = PARAMS;
export declare type ADD_BODY = {
    accessLog: Partial<AccessLogs>;
};
export declare type ADD_RESPONSE = AccessLogs;
export {};
//# sourceMappingURL=access-log.d.ts.map