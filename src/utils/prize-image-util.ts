import { PrizeImageUtil } from '@/utils';


export const DefaultPrizeImageUtil: PrizeImageUtil = {
  
  getPrizeImage(grade: number): string {
    let imagePath: string = '';
    switch (grade) {
      case 1: imagePath = '1st.png';
    }
    return imagePath;
  }
}