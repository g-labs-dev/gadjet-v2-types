import { Branches, Contracts, EventAttendees, Events, Hqs, TenantRoles, Tenants, Users } from '../../model';
import { Device, Pagination, Result, UsedCreditAmount } from '../../type';
type PARAMS = {
    userId: number;
};
export type UPDATE_PASSWORD_PARAMS = PARAMS;
export type UPDATE_PASSWORD_BODY = {
    user: {
        password: string;
    };
};
export type UPDATE_PASSWORD_RESPONSE = [number];
export type UPDATE_PARAMS = PARAMS;
export type UPDATE_BODY = {
    user: Partial<Users>;
};
export type UPDATE_RESPONSE = [number];
export type GET_ROLE_PARAMS = PARAMS;
export type GET_ROLE_RESPONSE = {
    roles: TenantRoles[];
};
export type GET_EVENTS_PARAMS = PARAMS;
export type GET_EVENTS_QUERY = Pagination;
export type GET_EVENTS_RESPONSE = {
    total: number;
    events: Events[];
};
export type ATTEND_EVENT_PARAMS = PARAMS & {
    eventId: number;
};
export type ATTEND_EVENT_BODY = {
    tenantId: number;
    usedCreditAmount: UsedCreditAmount;
};
export type ATTEND_EVENT_RESPONSE = {
    eventAttendee: EventAttendees;
};
export type CANCEL_ATTEND_EVENT_PARAMS = PARAMS & {
    eventId: number;
    eventAttendeeId: number;
};
export type CANCEL_ATTEND_EVENT_RESPONSE = [number];
export type GET_TENANTS_PARAMS = PARAMS;
export type GET_TENANTS_QUERY = Pagination;
export type GET_TENANTS_RESPONSE = {
    total: number;
    tenants: Tenants[];
};
export type GET_STATE_PARAMS = PARAMS;
export type GET_STATE_RESPONSE = {
    state: {
        contracts: Contracts[];
        tenants: Tenants[];
        branches: Branches[];
        hqs: Hqs[];
    };
};
export type RECEIVE_INVITE_PARAMS = PARAMS;
export type RECEIVE_INVITE_BODY = {
    code: string;
};
export type RECEIVE_INVITE_RESPONSE = {
    tenantRole: TenantRoles;
} & Result;
export type UPDATE_PUSH_TOKEN_PARAMS = PARAMS;
export type UPDATE_PUSH_TOKEN_BODY = {
    pushToken: string;
};
export type UPDATE_PUSH_TOKEN_RESPONSE = [number];
export type UPDATE_DEVICE_PARAMS = PARAMS;
export type UPDATE_DEVICE_BODY = {
    device: Device;
};
export type UPDATE_DEVICE_RESPONSE = [number];
export {};
//# sourceMappingURL=index.d.ts.map