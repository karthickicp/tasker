export type ISignupFields = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export type ILoginFields = Omit<ISignupFields, 'name' | 'confirmPassword'>;
