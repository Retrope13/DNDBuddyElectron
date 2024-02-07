export class Character {
  // Properties
  private name: string;
  private level: number;
  private hp: number;

  // Constructor
  constructor(CharName: string, CharLevel: number, CharHp: number) {
    this.name = CharName;
    this.level = CharLevel;
    this.hp = CharHp;
  }

  //!Name Methods
  public setCharName(newName: string): boolean {
    try {
      this.name = newName;
      return true;
    } catch (e) {
      console.error(e);
      return false;
    }
  }

  public getCharName(): string {
    return this.name;
  }

  //!Level Methods
  public setCharLevel(newLevel: number): boolean {
    try {
      this.level = newLevel;
      return true;
    } catch (e) {
      console.error(e);
      return false;
    }
  }

  public getCharLevel(): number {
    return this.level;
  }

  //!Hp Methods
  public setCharHp(newHp: number): boolean {
    try {
      this.level = newHp;
      return true;
    } catch (e) {
      console.error(e);
      return false;
    }
  }

  public getCharHp(): number {
    return this.hp;
  }
}
