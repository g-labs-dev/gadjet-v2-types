import { Branches, Contracts, EventAttendees, Events, Hqs, TenantRoles, Tenants, Users } from '../../model';
import { Pagination, UsedCreditAmount } from '../../type';
declare type PARAMS = {
    userId: number;
};
export declare type UPDATE_PASSWORD_PARAMS = PARAMS;
export declare type UPDATE_PASSWORD_BODY = {
    user: {
        password: string;
    };
};
export declare type UPDATE_PASSWORD_RESPONSE = [number];
export declare type UPDATE_PARAMS = PARAMS;
export declare type UPDATE_BODY = {
    user: Partial<Users>;
};
export declare type UPDATE_RESPONSE = [number];
export declare type GET_ROLE_PARAMS = PARAMS;
export declare type GET_ROLE_RESPONSE = {
    roles: TenantRoles[];
};
export declare type GET_EVENTS_PARAMS = PARAMS;
export declare type GET_EVENTS_QUERY = Pagination;
export declare type GET_EVENTS_RESPONSE = {
    total: number;
    events: Events[];
};
export declare type ATTEND_EVENT_PARAMS = PARAMS & {
    eventId: number;
};
export declare type ATTEND_EVENT_BODY = {
    tenantId: number;
    usedCreditAmount: UsedCreditAmount;
};
export declare type ATTEND_EVENT_RESPONSE = {
    eventAttendee: EventAttendees;
};
export declare type CANCEL_ATTEND_EVENT_PARAMS = PARAMS & {
    eventId: number;
    eventAttendeeId: number;
};
export declare type CANCEL_ATTEND_EVENT_RESPONSE = [number];
export declare type GET_TENANTS_PARAMS = PARAMS;
export declare type GET_TENANTS_QUERY = Pagination;
export declare type GET_TENANTS_RESPONSE = {
    total: number;
    tenants: Tenants[];
};
export declare type GET_STATE_PARAMS = PARAMS;
export declare type GET_STATE_RESPONSE = {
    state: {
        contracts: Contracts[];
        tenants: Tenants[];
        branches: Branches[];
        hqs: Hqs[];
    };
};
export declare type RECEIVE_INVITE_PARAMS = PARAMS;
export declare type RECEIVE_INVITE_BODY = {
    code: string;
};
export declare type RECEIVE_INVITE_RESPONSE = {
    tenantRole: TenantRoles;
};
export {};
//# sourceMappingURL=index.d.ts.map