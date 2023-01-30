export default class Papel {
    constructor(
        private papel: string,
        private nome: string,
        private tipoDeRenda: string,
        private tipoDeInvestimento: string
    ) { }

    public getPropriedade(propriedade: string): any {
        return this[propriedade]
    }

    public setPropriedade(propriedade: string, data: any): void {
        this[propriedade] = data
    }
}