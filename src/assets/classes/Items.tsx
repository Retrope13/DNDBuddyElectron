export class Item {
    private name: string;
    private price: number;
    private quantity: number;

    constructor(ItemName: string, ItemPrice: number, ItemQuantity: number) {
        this.name = ItemName;
        this.price = ItemPrice;
        this.quantity = ItemQuantity;
    }

    //!Name Methods
    public getItemName(): string {
        return this.name;
    }

    public setItemName(newName: string) {
        this.name = newName;
    }

    //!Price Methods
    public getItemPrice(): number {
        return this.price;
    }

    public setItemPrice(newPrice: number) {
        this.price = newPrice;
    }

    //!Damage Methods

    
}