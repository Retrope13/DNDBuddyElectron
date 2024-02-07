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
    public setItemName(newName: string) {
        this.name = newName;
    }

    public getItemName(): string {
        return this.name;
    }
    

    //!Price Methods
    public setItemPrice(newPrice: number) {
        this.price = newPrice;
    }

    public getItemPrice(): number {
        return this.price;
    }


    //!Quantity Methods
    public setQuantity(newQuantity: number) {
        this.quantity = newQuantity;
    }

    public getQuantity(): number{
        return this.quantity
    }

    
}