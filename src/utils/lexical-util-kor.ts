import { LexcialUtil } from '@/utils';

let korOrdinalArr = [
  '첫번째', '두번째', '세번째',
  '네번째', '다섯번째', '여섯번째',
  '일곱번째', '여덟번째', '아홉번째'
];

export const KorLexicalUtil: LexcialUtil = {
  getOrdinalExpr: function(n: number): string {
    if (n > korOrdinalArr.length) {
      return n.toString();
    }
    return korOrdinalArr[n - 1];
  }
}