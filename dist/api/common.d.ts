import { Banks, Dates, Files, Gics, Images } from '../model'
export declare type ADD_FILE_BODY = {
  file: Partial<Files>
}
export declare type ADD_FILE_RESPONSE = Files
export declare type ADD_IMAGE_BODY = {
  image: Partial<Images>
}
export declare type ADD_IMAGE_RESPONSE = Images
export declare type GET_BANKS_RESPONSE = {
  banks: Banks[]
}
export declare type GET_GICS_RESPONSE = {
  gics: Gics[]
}
export declare type GET_DATE_PARAMS = {
  date: string
}
export declare type GET_DATE_RESPONSE = Dates
//# sourceMappingURL=common.d.ts.map
