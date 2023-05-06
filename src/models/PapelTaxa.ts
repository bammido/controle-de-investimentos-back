import generateUniqueId from "../helpers/functions/generateUniqueId";

export default class PapelTaxa {
    constructor(
        public papel: string,
        public taxa: string,
        public id: string = generateUniqueId()
    ) { }

}