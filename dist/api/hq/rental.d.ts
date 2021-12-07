import { Rentals } from '../../model';
import { Pagination } from '../../type';
declare type PARAMS = {
    hqId: number;
};
export declare type GET_RENTALS_PARAMS = PARAMS;
export declare type GET_RENTALS_QUERY = Pagination & {};
export declare type GET_RENTALS_RESPONSE = {
    total: number;
    rentals: Rentals[];
};
export {};
//# sourceMappingURL=rental.d.ts.map