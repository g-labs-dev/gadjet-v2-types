import { Branches, Hqs, Managers } from '../../model';
type PARAMS = {};
export type GET_PARAMS = PARAMS;
export type GET_RESPONSE = Managers | null;
export type JOIN_PARAMS = PARAMS;
export type JOIN_BODY = {
    manager: Partial<Managers>;
};
export type JOIN_RESPONSE = {
    token: string;
    manager: Managers | null;
};
export type LOGIN_PARAMS = PARAMS;
export type LOGIN_BODY = {
    manager: Partial<Managers>;
};
export type LOGIN_RESPONSE = {
    token: string;
    manager: Managers | null;
};
export type SOCIAL_LOGIN_PARAMS = PARAMS;
export type SOCIAL_LOGIN_BODY = {
    manager: Partial<Managers>;
};
export type SOCIAL_LOGIN_RESPONSE = {
    token: string;
    manager: Managers | null;
};
export type UPDATE_PARAMS = PARAMS & {
    managerId: number;
};
export type UPDATE_BODY = {
    manager: Partial<Managers>;
};
export type UPDATE_RESPONSE = [number];
export type UPDATE_PASSWORD_PARAMS = PARAMS & {
    managerId: number;
};
export type UPDATE_PASSWORD_BODY = {
    manager: Partial<Managers>;
};
export type UPDATE_PASSWORD_RESPONSE = [number];
export type UPDATE_SOCIAL_PARAMS = PARAMS & {
    managerId: number;
};
export type UPDATE_SOCIAL_BODY = {
    manager: Partial<Managers>;
};
export type UPDATE_SOCIAL_RESPONSE = [number];
export type UPDATE_PUSH_TOKEN_PARAMS = PARAMS & {
    managerId: number;
};
export type UPDATE_PUSH_TOKEN_BODY = {
    pushToken: string;
};
export type UPDATE_PUSH_TOKEN_RESPONSE = [number];
export type EMAIL_VERIFY_PARAMS = {};
export type EMAIL_VERIFY_QUERY = {
    email: string;
};
export type EMAIL_VERIFY_RESPONSE = boolean;
export type EMAIL_CODE_PARAMS = {};
export type EMAIL_CODE_BODY = {
    email: string;
};
export type EMAIL_CODE_RESPONSE = string;
export type RESET_PASSWORD_LINK_PARAMS = {};
export type RESET_PASSWORD_LINK_BODY = {
    email: string;
};
export type RESET_PASSWORD_LINK_RESPONSE = boolean;
export type RESET_PASSWORD_PARAMS = {};
export type RESET_PASSWORD_BODY = {
    key: string;
    password: string;
};
export type RESET_PASSWORD_RESPONSE = boolean;
export type CODE_VERIFY_PARAMS = {
    code: string;
};
export type CODE_VERIFY_QUERY = {};
export type CODE_VERIFY_RESPONSE = Managers | null;
export type JOIN_WITH_HQ_BODY = {
    manager: Partial<Managers>;
    branch: Partial<Branches>;
    hq: Partial<Hqs>;
};
export type JOIN_WITH_HQ_RESPONSE = {
    token: string;
    manager: Managers | null;
};
export {};
//# sourceMappingURL=auth.d.ts.map