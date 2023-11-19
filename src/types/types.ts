export interface IForm {
  name: string;
  email: string;
  phone: string;
  planOption: string;
  planPrice: number;
  paymentFrequency: "monthly" | "yearly";
  addOns?: AddOn[]
}

export interface AddOn {
  title: string;
  description: string;
  price: { monthly: number; yearly: number }
}