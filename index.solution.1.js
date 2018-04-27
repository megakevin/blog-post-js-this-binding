class PolitePerson {
    constructor(greeting, energy) {
        this.greeting = greeting;
        this.energy = energy;
    }

    greet(subject) {
        let exclamation = "";

        for (let index = 0; index < this.energy; index++) {
            exclamation += "!"
        }

        alert(this.greeting + " " + subject + exclamation);
    }
}

class NotSoPolitePerson {
    constructor(greetMethod) {
        this.greetMethod = greetMethod;
    }

    greet(subject) {
        this.greetMethod(subject);
    }
}

let polite = new PolitePerson("Hello", 2);
polite.greet("World");

let notPolite = new NotSoPolitePerson((subject) => polite.greet(subject));
notPolite.greet("Kevin");
