export default class Papel {
    constructor(
        public papel: string,
        public nome: string,
        public tipoDeRenda: string,
        public tipoDeInvestimento?: string,
        public taxasIncidentes?: string
    ) { }

    // public getPropriedade(propriedade: any): string {
    //     return this[propriedade]
    // }

    // public setPropriedade(propriedade: any, data: string): void {
    //     this[propriedade] = data
    // }
}