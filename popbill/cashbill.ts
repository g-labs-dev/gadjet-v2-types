// https://docs.popbill.com/taxinvoice/node/api

export type Cashbill = {
  mgtKey: string;
  tradeType: "승인거래" | "취소거래";
  tardeUsage: "소득공제용" | "지출증빙용";
  identityNum: string;
  taxationType: "과세";

  totalAmount: string;
  supplyCost: string;
  tax: string;
  serviceFee: string;

  franchiseCorpNum: string;
  franchiseCorpName?: string;
  franchiseCEOName?: string;
  franchiseAddr?: string;
  franchiseTEL?: string;

  customerName?: string;
  itemName?: string;
  orderNumber?: string;
  email?: string;
  hp?: string;
};

export type CashbillCancel = Cashbill & { orgConfirmNum: string; orgTradeDate: string; cancelType: 1 | 2 | 3 };
