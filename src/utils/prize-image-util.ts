import { PrizeImageUtil } from '@/utils';


export const DefaultPrizeImageUtil: PrizeImageUtil = {
  
  getPrizeImage(grade: number): string {
    let imagePath: string = '';
    let rank: number = 0;
    try {
      rank = parseInt(grade.toString());
      switch(rank) {
        case 1: imagePath = '1st.png'; break;
        case 2: imagePath = '2nd.png'; break;
        case 3: imagePath = '3rd.png'; break;
        case 4: imagePath = '4th.png'; break;
        case 5: imagePath = '5th.png'; break;
        case 6: imagePath = '6th.png'; break;
        case 7: imagePath = '7th.png'; break;
        case 8: imagePath = '8th.png'; break;
        case 9: imagePath = '9th.png'; break;
        case 10: imagePath = '10th.png'; break;
      }
      return imagePath;
    } catch (ex) {
      return '1st.png';
    }
  }
}