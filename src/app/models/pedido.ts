import { Pizza } from "./pizza";

export class Pedido {
    constructor(
        public endereço: string,
        public pizzas: Pizza[],
        public precoTotal: number
    ){}
}
