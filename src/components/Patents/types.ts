export interface Patent {
  title: string;
  inventors: string;
  applicationNo: string;
  filingDate: string;
  grantDate?: string;
  patentNo?: string;
  status: 'granted' | 'pending';
}