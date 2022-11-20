type PARAMS = {
    hqId: number;
};
export type GRAPH_PAYMENT_PARAMS = PARAMS;
export type GRAPH_PAYMENT_QUERY = {
    date: [string, string];
};
export type GRAPH_PAYMENT_RESPONSE = {
    payments: {
        month: string;
        price: number;
    }[];
    expectPayments: {
        month: string;
        price: number;
    }[];
    expenditure: {
        month: string;
        price: number;
    }[];
};
export type GRAPH_EXPECT_PAYMENT_PARAMS = PARAMS;
export type GRAPH_EXPECT_PAYMENT_QUERY = {
    date: [string, string];
};
export type GRAPH_EXPECT_PAYMENT_RESPONSE = {
    "전 지점": {
        month: string;
        price: number;
    }[];
    [branchName: string]: {
        month: string;
        price: number;
    }[];
};
export type GRAPH_CONTRACT_PARAMS = PARAMS;
export type GRAPH_CONTRACT_QUERY = {
    date: [string, string];
};
export type GRAPH_CONTRACT_RESPONSE = {
    "전 지점": {
        month: string;
        start: number;
        end: number;
    }[];
    [branchName: string]: {
        month: string;
        start: number;
        end: number;
    }[];
};
/**
 *  start: 시작계약
 *  end: 종료계약
 */
export type GRAPH_SPACE_TYPE_PARAMS = PARAMS;
export type GRAPH_SPACE_TYPE_QUERY = {
    date: [string, string];
};
export type GRAPH_SPACE_TYPE_RESPONSE = {
    [branchName: string]: {
        [spaceTypeName: string]: {
            month: string;
            price: number;
        }[];
    };
};
export {};
//# sourceMappingURL=graph.d.ts.map