import { BranchDashboardDayEvent, BranchDashboardDayEventDetail, BranchDashboardEventSummary } from '../../type';
declare type PARAMS = {
    hqId: number;
    branchId: number;
};
export declare type GET_EVENT_PARAMS = PARAMS;
export declare type GET_EVENT_QUERY = {
    date: [string, string];
};
export declare type GET_EVENT_RESPONSE = {
    date: string;
    event: BranchDashboardDayEvent;
}[];
export declare type GET_EVENT_SUMMARY_PARAMS = PARAMS;
export declare type GET_EVENT_SUMMARY_QUERY = {
    date: [string, string];
};
export declare type GET_EVENT_SUMMARY_RESPONSE = BranchDashboardEventSummary;
export declare type GET_EVENT_DETAIL_PARAMS = PARAMS & {
    date: string;
};
export declare type GET_EVENT_DETAIL_RESPONSE = BranchDashboardDayEventDetail;
export {};
//# sourceMappingURL=dashboard.d.ts.map