import { Item } from "./Item";

export class Weapon extends Item {
    private toHit: number;
    private numDice: number;
    private typeDice: number;
    private damageType: string;
    
    
    constructor(name: string, price: number, quantity: number, hit: number, nDice: number, tDice: number, dType: string ) {
        super(name, price, quantity);
        this.toHit = hit;
        this.numDice = nDice;
        this.typeDice = tDice;
        this.damageType = dType;
    }

    //!To Hit methods
    public setToHit(newHit: number) {
        this.toHit = newHit;
    }

    public getToHit(): number {
        return this.toHit;
    }

    //! Num Dice Methods
    public setNumDice(newNum: number) {
        this.numDice = newNum;
    }

    public getNumDice(): number {
        return this.numDice;
    }

    //!Type Dice Methods
    public setTypeDice(newDice: number) {
        this.typeDice = newDice;
    }

    public getTypeDice(): number {
        return this.typeDice;
    }

    //!Damage Type Methods
    public setDamageType(newDamageType: string) {
        this.damageType = newDamageType;
    }

    public getDamageType(): string {
        return this.damageType;
    }

}