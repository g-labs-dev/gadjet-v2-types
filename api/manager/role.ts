import { Branches, Hqs } from "../../model";
import {} from "../../type";

type PARAMS = { managerId: number };

// 권한 조회
// GET /managers/0/roles
export type GET_PARAMS = PARAMS;
export type GET_RESPONSE = { hqs: Hqs[]; branches: Branches[] };
// ===========================
