export type NormalUser = {
  name: string;
  nickname: string;
  email: string;
  password: string;
  role: string;
};

export type AdminUser = {
  token: string;
  name: string;
  nickname: string;
  email: string;
  password: string;
  role: string;
};

export type BandUser = {
  name: string;
  nickname: string;
  email: string;
  password: string;
  role: string;
  description: string;
};
