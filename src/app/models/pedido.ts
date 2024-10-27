import { Pizza } from "./pizza";

export class Pedido {
    constructor(
        public endereco: string,
        public pizzas: Pizza[],
        public precoTotal: number
    ){}
}
