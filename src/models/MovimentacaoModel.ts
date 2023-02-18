import generateUniqueId from "../helpers/functions/generateUniqueId";

export default class Movimentacao {
    constructor(
        public papel: string,
        public dataDaCompra: Date,
        public corretora: string,
        public preco: number,
        public qtd: number,
        public userId: string,
        public tipoMovimentacao: string,
        public id = generateUniqueId()
    ) {
    }

}