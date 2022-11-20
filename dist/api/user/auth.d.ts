import { Users } from '../../model';
/**
 * 이용자 로그인 아이디는 전화번호, 이메일 둘다 사용 가능
 */
type PARAMS = {};
export type GET_PARAMS = PARAMS;
export type GET_RESPONSE = Users | null;
export type LOGIN_PARAMS = PARAMS;
export type LOGIN_BODY = {
    user: {
        id: string;
        password: string;
    };
};
export type LOGIN_RESPONSE = {
    token: string;
    user: Users | null;
};
/**
 * id = contact or email
 */
export type JOIN_PARAMS = PARAMS;
export type JOIN_BODY = {
    user: {
        type: 'email' | 'contact';
        id: string;
        password: string;
        name: string;
    };
};
export type JOIN_RESPONSE = {
    token: string;
    user: Users | null;
};
export type SEND_AUTH_CODE_PARAMS = PARAMS;
export type SEND_AUTH_CODE_BODY = {
    id: string;
    type: 'email' | 'contact';
};
export type SEND_AUTH_CODE_RESPONSE = {
    code: string;
    error: null | string;
};
/**
 * Users.findOne({ where: { email }}) 또는 Users.findOne({ where: { contact }})
 * 없으면 에러
 */
export type RESET_PASSWORD_PARAMS = PARAMS & {
    code: string;
};
export type RESET_PASSWORD_BODY = {
    password: string;
    id: string;
};
export type RESET_PASSWORD_RESPONSE = [number];
/**
 * Users.update({ password },{ where: { code } })
 */
export type MIGRATE_PARAMS = PARAMS;
export type MIGRATE_BODY = {};
export type MIGRATE_RESPONSE = [number];
export {};
//# sourceMappingURL=auth.d.ts.map