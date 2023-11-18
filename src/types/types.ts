export interface IForm {
  name: string;
  email: string;
  phone: string;
  planOption: string;
  planPrice: string;
  paymentFrequency: "monthly" | "yearly";
  addOns?: string[]
}