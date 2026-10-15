export interface Appresponse<T> {
  success: boolean;
  message: string;
  data?: T;
  error?: string;
}
