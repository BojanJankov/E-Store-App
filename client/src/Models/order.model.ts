export interface AddOrder {
  fullName: string;
  address: string;
  phoneNumber: string;
  amount: number;
  date: Date;
  products: OrderProduct[];
}

interface OrderProduct {
  productId: number;
  quantity: number;
}
