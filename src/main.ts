import converter from "./utils/converter";
import parser from "./utils/parser";

export const convert = <T>(value: T): string =>
  JSON.stringify(value, converter);
export const parse = <T>(strData: string): T => JSON.parse(strData, parser);

module.exports = { convert, parse };