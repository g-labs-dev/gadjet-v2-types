import { Rentals } from '../../model';
import { Pagination } from '../../type';
type PARAMS = {
    hqId: number;
};
export type GET_RENTALS_PARAMS = PARAMS;
export type GET_RENTALS_QUERY = Pagination & {};
export type GET_RENTALS_RESPONSE = {
    total: number;
    rentals: Rentals[];
};
export {};
//# sourceMappingURL=rental.d.ts.map