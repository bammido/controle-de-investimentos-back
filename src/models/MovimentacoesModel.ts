export default class Movimentacoes {
    constructor(
        private papel: string,
        private dataDaCompra: Date,
        private corretora: string,
        private preco: number,
        private qtd: number,
        private userId: string
    ) { }

    public getPropriedade(propriedade: string): any {
        return this[propriedade]
    }

    public setPropriedade(propriedade: string, data: any): void {
        this[propriedade] = data
    }
}