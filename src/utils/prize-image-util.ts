import { PrizeImageUtil } from '@/utils';


export const DefaultPrizeImageUtil: PrizeImageUtil = {
  
  getPrizeImage(grade: number): string {
    let imagePath: string = '';
    // switch (parseInt(grade.toString())) {
    //   case 1: imagePath = '1st.png';
    //   default: imagePath = 'https://cdn.vuetifyjs.com/images/lists/1.jpg';
    // }


    if (parseInt(grade.toString()) === 1) {
      imagePath = '1st.png';
    }
    return imagePath;
  }
}