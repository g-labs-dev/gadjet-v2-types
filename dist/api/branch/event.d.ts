import { EventAttendees, Events } from '../../model';
import { Pagination } from '../../type';
declare type PARAMS = {
    hqId: number;
    branchId: number;
};
export declare type GET_LIST_PARAMS = PARAMS;
export declare type GET_LIST_QUERY = Pagination & {
    query: string;
};
export declare type GET_LIST_RESPONSE = {
    total: number;
    events: Events[];
};
export declare type GET_DETAIL_PARAMS = PARAMS & {
    eventId: number;
};
export declare type GET_DETAIL_RESPONSE = Events;
export declare type ADD_PARAMS = PARAMS;
export declare type ADD_BODY = {
    event: Partial<Events>;
};
export declare type ADD_RESPONSE = Events;
export declare type UPDATE_PARAMS = PARAMS & {
    eventId: number;
};
export declare type UPDATE_BODY = {
    event: Partial<Events>;
};
export declare type UPDATE_RESPONSE = [number];
export declare type DELETE_PARAMS = PARAMS & {
    eventId: number;
};
export declare type DELETE_RESPONSE = [number];
export declare type GET_ATTENDEES_PARAMS = PARAMS & {
    eventId: number;
};
export declare type GET_ATTENDEES_RESPONSE = EventAttendees[];
export declare type DELETE_ATTENDEE_PARAMS = PARAMS & {
    eventId: number;
    eventAttendeeId: number;
};
export declare type DELETE_ATTENDEE_RESPONSE = [number];
export {};
//# sourceMappingURL=event.d.ts.map