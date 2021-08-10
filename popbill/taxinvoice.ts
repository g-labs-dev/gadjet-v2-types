// https://docs.popbill.com/taxinvoice/node/api

export type Taxinvoice = {
  ntsconfirmNum?: string;
  issueType: "위수탁"; //  "정발행" | "역발행" | "위수탁"
  taxType: "과세" | "영세" | "면세";
  chargeDirection: "정과금"; // "정과금" | "역과금"
  serialNum?: string;
  kwon?: string;
  ho?: string;
  writeDate: string; // YYYYMMDD
  purposeType: "영수" | "청구" | "없음";
  supplyCostTotal: string;
  taxTotal: string;
  totalAmount: string;
  remark1?: string;

  // 공급자
  invoicerMgtKey?: string;
  invoicerCorpNum: string;
  invoicerTaxRegID?: string;
  invoicerCorpName: string;
  invoicerCEOName: string;
  invoicerAddr?: string;
  invoicerBizType?: string;
  invoicerBizClass?: string;
  invoicerContactName?: string;
  invoicerDeptName?: string;
  invoicerTEL?: string;
  invoicerHP?: string;
  invoicerEmail?: string;

  // 공급받는자
  invoiceeType: "사업자" | "개인" | "외국인";
  invoiceeCorpNum: string;
  invoiceeTaxRegID?: string;
  invoiceeCorpName: string;
  invoiceeCEOName: string;
  invoiceeAddr?: string;
  invoiceeBizType?: string;
  invoiceeBizClass?: string;
  invoiceeContactName1?: string;
  invoiceeDeptName1?: string;
  invoiceeTEL1?: string;
  invoiceeHP1?: string;
  invoiceeEmail1?: string;
  invoiceeContactName2?: string;
  invoiceeDeptName2?: string;
  invoiceeTEL2?: string;
  invoiceeHP2?: string;
  invoiceeEmail2?: string;

  // 수탁자
  trusteeMgtKey: string;
  trusteeCorpNum: "3788700388";
  trusteeTaxRegID?: string;
  trusteeCorpName: "주식회사 지랩스";
  trusteeCEOName: "백기민";
  trusteeAddr: "서울특별시 강남구 선릉로 578, 7층(삼성동)";
  trusteeBizType: "부동산업 및 임대업, 서비스, 소매";
  trusteeBizClass: "정보통신서비스업, 전자상거래업";
  trusteeContactName: "강병선";
  trusteeDeptName: "GADJET";
  trusteeTEL: "07042054025";
  trusteeHP: "07042054025";
  trusteeEmail: "support@gadjet.io";

  detailList: TaxinvoiceDetail[];
  addContactList: TaxinvoiceAddContact[];
};

export type TaxinvoiceModify = Taxinvoice & { modifyCode: number; orgNTSConfirmNum: string };

export type TaxinvoiceAddContact = { serialNum: number; contactName: string; email: string };

export type TaxinvoiceDetail = {
  serialNum: number;
  purchaseDT?: string; // YYYYMMDD
  itemName?: string;
  spec?: string;
  qty?: string;
  unitCost?: string;
  supplyCost?: string;
  tax?: string;
  remark?: string;
};
