export class CreateOrderDTO {
    readonly mesa: number;
    readonly idUser: string;
    readonly listProducts: Array<CreateOrderDTO>;
    readonly price: number;
    readonly createDate: Date;
  }
  