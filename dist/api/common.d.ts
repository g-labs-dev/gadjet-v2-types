import { Banks, Dates, Files, Gics, Images } from '../model';
export type ADD_FILE_BODY = {
    file: Partial<Files>;
};
export type ADD_FILE_RESPONSE = Files;
export type ADD_IMAGE_BODY = {
    image: Partial<Images>;
};
export type ADD_IMAGE_RESPONSE = Images;
export type GET_BANKS_RESPONSE = {
    banks: Banks[];
};
export type GET_GICS_RESPONSE = {
    gics: Gics[];
};
export type GET_DATE_PARAMS = {
    date: string;
};
export type GET_DATE_RESPONSE = Dates;
//# sourceMappingURL=common.d.ts.map