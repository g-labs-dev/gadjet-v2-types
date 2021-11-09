import { ManagerNotifications } from '../../model';
declare type PARAMS = {
    managerId: number;
};
export declare type GET_PARAMS = PARAMS;
export declare type GET_RESPONSE = ManagerNotifications[];
export declare type READ_PARAMS = PARAMS & {
    managerNotificationId: number;
};
export declare type READ_RESPONSE = [number];
export declare type READ_ALL_PARAMS = PARAMS;
export declare type READ_ALL_RESPONSE = [number];
export declare type DELETE_PARAMS = PARAMS & {
    managerNotificationId: number;
};
export declare type DELETE_RESPONSE = [number];
export {};
//# sourceMappingURL=notification.d.ts.map