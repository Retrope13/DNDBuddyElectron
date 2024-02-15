import { Armor } from "./itemClasses/Armor";
import { Spell } from "./itemClasses/Spell";
import { Weapon } from "./itemClasses/Weapon";
import { Stat } from "./Stat";

export class Character {
  // Properties
  private name: string;
  private level: number;
  private hp: number;
  private weapons: Weapon[] = [];
  private spells: Spell[] = [];
  private stats: Stat[] = [];
  private armors: Armor[] = [];

  // Constructor
  constructor(CharName: string, CharLevel: number, CharHp: number, weapons: Weapon[], spells: Spell[], stats: Stat[], armors: Armor[]) {
    this.name = CharName;
    this.level = CharLevel;
    this.hp = CharHp;
    this.weapons = weapons;
    this.spells = spells;
    this.stats = stats;
    this.armors = armors;
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
