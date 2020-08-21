export class Login {
  error: boolean;
  status: number;
  body: {
    'token': string,
    'idCliente': number
  };
}
