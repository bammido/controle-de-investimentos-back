import generateUniqueId from "../helpers/functions/generateUniqueId";

export default class Papel {
    constructor(
        public papel: string,
        public nome: string,
        public tipoDeRenda: string,
        public tipoDeInvestimento?: string,
        public taxasIncidentes?: string,
        public id: string = generateUniqueId()
    ) { }

}