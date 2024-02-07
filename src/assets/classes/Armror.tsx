import { Item } from "./Item";

export class Armor extends Item {
    private acMod: number;
    private Atype: string;

    constructor(name: string, price: number, quantity: number, acMod: number, type: string ) {
        super(name, price, quantity);
        this.acMod = acMod;
        this.Atype = type;
    }

    //!Armor Class Methods
    public setACMod(newAcMod: number) {
        this.acMod = newAcMod;
    }

    public getACMod(): number {
        return this.acMod;
    }

    //!Armor Type Methods
    public setAType(newAType: string) {
        this.Atype = newAType;
    }

    public getAType(): string {
        return this.Atype;
    }

}