class Character {
    constructor(name, health, power) {
        this._name = name;
        this._health = health;
        this._power = power;
    }

    get name() {
        return (this._name);
    }

    get health() {
        return (this._health);
    }

    get power() {
        return (this._power);
    }

    set name(value) {
        if (typeof value !== 'string') {
            throw TypeError("Name must be a string")
        }

        this._name = value;
    }

    set health(value) {
        if (typeof value !== 'number') {
            throw TypeError("Health must be a number")
        }

        this._health = value;
    }

    set power(value) {
        if (typeof value !== 'number') {
            throw TypeError("Power must be a number")
        }

        this._power = value;
    }

    describe() {
        return `${this._name} | HP: ${this._health} | Power: ${this._power}`;
    }

    static battle(a, b) {
        const action =  new Map([
            [Warior, character => character.attack()],
            [Mage, character => character.castSpell()],
            [Archer, character => character.throwArrow()],
        ])

        const attackA = action.get(a.constructor);
        const attackB = action.get(b.constructor);

        if (attackA(a) > attackB(b)) {
            return `Winner: ${a.name}`;
        }
        else if (attackA(a) > attackB(b)) {
            return `Winner: ${b.name}`;
        }

        return `Draw`;
    }

    [Symbol.toPrimitive](hint) {
        if (hint === 'number') {
            return this._health;
        }

        if (hint === 'string') {
            return this.describe();
        }
    }
}

class Warior extends Character {
    constructor(name, health, power, shield) {
        super(name, health, power);

        this._shield = shield;
    }

    get shield() {
        return this._shield;
    }

    set shield(value) {
        if (typeof value !== 'number') {
            throw TypeError("Shield must be a number")
        }

        this._shield = value;
    }

    attack() {
        return (this._power + this._shield) / 2
    }
}

class Mage extends Character {
    constructor(name, health, power, mana) {
        super(name, health, power);

        this._mana = mana;
    }

    get mana() {
        return this._mana;
    }

    set mana(value) {
        if (typeof value !== 'number') {
            throw TypeError("Mana must be a number")
        }

        this._mana = value;
    }

    castSpell() {
        if (this._mana != 0) {
            return this._mana * 2;
        }

        return 0
    }
}

class Archer extends Character {
    constructor(name, health, power, arrows) {
        super(name, health, power);

        this._arrows = arrows;
    }

    get arrows() {
        return this._arrows;
    }

    set arrows(value) {
        if (typeof value !== 'number') {
            throw TypeError("Arrows must be a number")
        }

        this._arrows = value;
    }

    throwArrow() {
        if (this._arrows !== 0) {
            this._arrows -= 1;
            return this._power;
        }

        return 0
    }
}

