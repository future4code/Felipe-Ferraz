export type deposit = {
  date: Date;
  cpf: number;
  agency: number;
};

export type withdraw = {
  accountId: number;
  agency: number;
  date: Date;
};

export type transfer = {
  accountId: number;
  agency: number;
  agencyToReceive: number;
  cpfToReceive: number;
  date: Date;
};
