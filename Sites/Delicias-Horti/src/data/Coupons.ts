export interface Coupon {
    code: string;
    discount: number; // em porcentagem
  }
  
  export const coupons: Coupon[] = [
    {
      code: 'HORTI10',
      discount: 10,
    },
    {
      code: 'VERDE15',
      discount: 15,
    }
  ];
  