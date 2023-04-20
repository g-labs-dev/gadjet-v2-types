import { Users } from '../../model';
/**
 * 이용자 로그인 아이디는 전화번호, 이메일 둘다 사용 가능
 */
declare type PARAMS = {};
export declare type GET_PARAMS = PARAMS;
export declare type GET_RESPONSE = Users | null;
export declare type LOGIN_PARAMS = PARAMS;
export declare type LOGIN_BODY = {
    user: {
        id: string;
        password: string;
    };
};
export declare type LOGIN_RESPONSE = {
    token: string;
    user: Users | null;
};
/**
 * id = contact or email
 */
export declare type JOIN_PARAMS = PARAMS;
export declare type JOIN_BODY = {
    user: {
        type: 'email' | 'contact';
        id: string;
        password: string;
        name: string;
    };
};
export declare type JOIN_RESPONSE = {
    token: string;
    user: Users | null;
};
export declare type SEND_AUTH_CODE_PARAMS = PARAMS;
export declare type SEND_AUTH_CODE_BODY = {
    id: string;
    type: 'email' | 'contact';
};
export declare type SEND_AUTH_CODE_RESPONSE = {
    code: string;
    error: null | string;
};
/**
 * Users.findOne({ where: { email }}) 또는 Users.findOne({ where: { contact }})
 * 없으면 에러
 */
export declare type RESET_PASSWORD_PARAMS = PARAMS & {
    code: string;
};
export declare type RESET_PASSWORD_BODY = {
    password: string;
    id: string;
};
export declare type RESET_PASSWORD_RESPONSE = [number];
/**
 * Users.update({ password },{ where: { code } })
 */
export declare type MIGRATE_PARAMS = PARAMS;
export declare type MIGRATE_BODY = {};
export declare type MIGRATE_RESPONSE = [number];
export {};
//# sourceMappingURL=auth.d.ts.map