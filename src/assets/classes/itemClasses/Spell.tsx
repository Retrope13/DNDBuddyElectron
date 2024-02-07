import { Item } from "./Item";

export class Spell extends Item {
  private description: string;
  private range: string;
  private damageType: string;
  private spellSlots: string;
  private level: string;
  private school: string;
  private duration: string;

  constructor(
    name: string,
    ItemPrice: number,
    ItemQuantity: number,
    description: string,
    range: string,
    damageType: string,
    spellSlots: string,
    level: string,
    school: string,
    duration: string
  ) {
    super(name, ItemPrice, ItemQuantity);
    this.description = description;
    this.range = range;
    this.damageType = damageType;
    this.spellSlots = spellSlots;
    this.level = level;
    this.school = school;
    this.duration = duration;
  }

  //!Description Methods
  public setDescription(newDesc: string) {
    this.description = newDesc;
  }

  public getDescription(): string {
    return this.description;
  }

  //!Range Methods
  public setRange(newRange: string) {
    this.range = newRange;
  }

  public getRange(): string {
    return this.range;
  }

  //!Damage Type Methods
  public setDType(newType: string) {
    this.damageType = newType;
  }

  public getDType(): string {
    return this.damageType;
  }

  //!Spell Slot Methods
  public setSpellSlots(newSlots: string) {
    this.spellSlots = newSlots;
  }

  public getSpellSlots(): string {
    return this.spellSlots;
  }

  //!Level Methods
  public setLevel(newLevel: string) {
    this.level = newLevel;
  }

  public getLevel(): string {
    return this.level;
  }

  //!School Methods
  public setSchool(newSchool: string) {
    this.school = newSchool;
  }

  public getSchool(): string {
    return this.school;
  }

  //!Duration Methods
  public setDuration(newDuration: string) {
    this.duration = newDuration;
  }

  public getDuration(): string {
    return this.duration;
  }
}
