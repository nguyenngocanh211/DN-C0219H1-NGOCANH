function Human(name, gender, weight) {
    this.name = name;
    this.gender = gender;
    this.weight = weight;

    this.isMale = function() {
        return this.gender;
    }

    this.setGender = function(gender) {
        this.gender = gender;
    }

    this.checkApple = function(apple) {
        return !apple.isEmpty();
    }

    this.eat = function(apple) {
        if (this.checkApple(apple)) {
            this.weight ++;
            apple.decrease();
        }
    }

    this.say = function(message) {
        console.log(message);
    }

    this.getWeight = function() {
        return this.weight;
    }
}