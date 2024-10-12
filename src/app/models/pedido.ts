import { Bebida } from "./bebida";
import { Pizza } from "./pizza";

export class Pedido {
    constructor(
        public endereço: string,
        public pizzas: [Pizza],
        public bebidas: [Bebida],
        public preçoTotal: number
    ){}
}
