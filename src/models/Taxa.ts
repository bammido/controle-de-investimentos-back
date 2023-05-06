import generateUniqueId from "../helpers/functions/generateUniqueId";

export default class Taxas {
    constructor(
        public nome: string,
        public id: string = generateUniqueId()
    ) { }

}