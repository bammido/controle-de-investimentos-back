export default class Usuario {
    constructor(
        public id: string,
        public email: string,
        public password: string,
        public nome: string
    ) { }

    // public getPropriedade(propriedade: any): any {
    //     return this[propriedade]
    // }

    // public setPropriedade(propriedade: any, data: any): void {
    //     this[propriedade] = data
    // }
}