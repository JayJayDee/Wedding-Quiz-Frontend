
export interface LexcialUtil {
  getOrdinalExpr(n: number): string;
  getCorrectExpr(correct: boolean): string;
}

export interface PrizeImageUtil {
  getPrizeImage(grade: number): string;
}

export { KorLexicalUtil } from './lexical-util-kor';
export { DefaultPrizeImageUtil } from './prize-image-util';