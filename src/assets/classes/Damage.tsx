export class Damage {
    private toHit: number;
    private numDice: number;
    private typeDice: number;
    private damageType: string;
    
    
    constructor(hit: number, nDice: number, tDice: number, dType: string ) {
        this.toHit = hit;
        this.numDice = nDice;
        this.typeDice = tDice;
        this.damageType = dType;
    }

    //!

}