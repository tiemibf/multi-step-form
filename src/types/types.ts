export interface IForm {
  name?: string;
  email?: string;
  phone?: string;
  planOption?: string;
  paymentFrequency?: "monthly" | "yearly";
}