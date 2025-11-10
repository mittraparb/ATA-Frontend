export interface Order {
  no: string;
  extRef: string;
  firstName: string;
  lastName: string;
  account: string;
  accountType: string
  operation: string;
  symbol: string;
  description: string;
  quantity: number;
  filledQuantity: number;
  status: 'Waiting' | 'Accepted' | 'Rejected';
  date: number;
  expiration: number;
  netAmount: string;
  price: number;
  exchangeRate: number;
  osLimit: number;
  referenceNumber: number;
  dateTime: number;
  telephone: string;
  userId: string;
  warnings: string[];
}

export interface OrderTableProps {
  orders: Order[];
}

export interface SearchFormProps {
  onSearch: (startDate: string, endDate: string) => void;
  total: number;
}