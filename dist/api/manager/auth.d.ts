import { Managers } from '../../model';
declare type PARAMS = {};
export declare type GET_PARAMS = PARAMS;
export declare type GET_RESPONSE = Managers | null;
export declare type JOIN_PARAMS = PARAMS;
export declare type JOIN_BODY = {
    manager: Partial<Managers>;
};
export declare type JOIN_RESPONSE = {
    token: string;
    manager: Managers | null;
};
export declare type LOGIN_PARAMS = PARAMS;
export declare type LOGIN_BODY = {
    manager: Partial<Managers>;
};
export declare type LOGIN_RESPONSE = {
    token: string;
    manager: Managers | null;
};
export declare type SOCIAL_LOGIN_PARAMS = PARAMS;
export declare type SOCIAL_LOGIN_BODY = {
    manager: Partial<Managers>;
};
export declare type SOCIAL_LOGIN_RESPONSE = {
    token: string;
    manager: Managers | null;
};
export declare type UPDATE_PARAMS = PARAMS & {
    managerId: number;
};
export declare type UPDATE_BODY = {
    manager: Partial<Managers>;
};
export declare type UPDATE_RESPONSE = [number];
export declare type UPDATE_PASSWORD_PARAMS = PARAMS & {
    managerId: number;
};
export declare type UPDATE_PASSWORD_BODY = {
    manager: Partial<Managers>;
};
export declare type UPDATE_PASSWORD_RESPONSE = [number];
export declare type UPDATE_SOCIAL_PARAMS = PARAMS & {
    managerId: number;
};
export declare type UPDATE_SOCIAL_BODY = {
    manager: Partial<Managers>;
};
export declare type UPDATE_SOCIAL_RESPONSE = [number];
export declare type UPDATE_PUSH_TOKEN_PARAMS = PARAMS & {
    managerId: number;
};
export declare type UPDATE_PUSH_TOKEN_BODY = {
    pushToken: string;
};
export declare type UPDATE_PUSH_TOKEN_RESPONSE = [number];
export declare type EMAIL_VERIFY_PARAMS = {};
export declare type EMAIL_VERIFY_QUERY = {
    email: string;
};
export declare type EMAIL_VERIFY_RESPONSE = boolean;
export declare type EMAIL_CODE_PARAMS = {};
export declare type EMAIL_CODE_BODY = {
    email: string;
};
export declare type EMAIL_CODE_RESPONSE = string;
export declare type RESET_PASSWORD_LINK_PARAMS = {};
export declare type RESET_PASSWORD_LINK_BODY = {
    email: string;
};
export declare type RESET_PASSWORD_LINK_RESPONSE = boolean;
export declare type RESET_PASSWORD_PARAMS = {};
export declare type RESET_PASSWORD_BODY = {
    key: string;
    password: string;
};
export declare type RESET_PASSWORD_RESPONSE = boolean;
export {};
//# sourceMappingURL=auth.d.ts.map