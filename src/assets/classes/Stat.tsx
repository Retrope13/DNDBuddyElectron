
export class Stat {
    private name: string;
    private abilityScore: number;
    private modifier: number;

    constructor(name: string, abilityScore:number = (Math.floor(Math.random() * (6 - 1 + 1)) + 1)) {
        this.name = name;
        this.abilityScore = abilityScore;
        this.modifier = (abilityScore - 10) / 2;
    }

    //!Name Methods
    public setName(newName: string) {
        this.name = newName;
    }

    public getName(): string {
        return this.name;
    }

    
    //!Ability Score Methods
    public setAbilityScore(newScore: number) {
        this.abilityScore = newScore;
    }

    public getAbilityScore(): number {
        return this.abilityScore;
    }

}