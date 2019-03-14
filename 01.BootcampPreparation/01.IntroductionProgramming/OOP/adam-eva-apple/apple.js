function Apple(weight) {
    this.weight = weight | 10;

    this.decrease = function () {
        if (this.weight > 0) {
            this.weight--;
        }
    }

    this.isEmpty = function () {
        return this.weight == 0;
    }

    this.getWeight = function () {
        return this.weight;
    }
}