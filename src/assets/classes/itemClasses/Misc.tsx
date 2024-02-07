import { Item } from "./Item"

export class Misc extends Item {
    private description: string;

    constructor(name: string, price: number, quantity: number, description: string) {
        super(name, price, quantity);
        this.description = description;
    }

    //!Description Methods
    public setDescription(newDescription: string) {
        this.description = newDescription;
    }

    public getDescription(): string {
        return this.description;
    }

}