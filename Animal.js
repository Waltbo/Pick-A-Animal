function Animal(name, description) {
    this.name = name;
    this.description = description;
}

Animal.prototype = {
    get animalName() {
        return this.name;
    },

    set animalName(name) {
        this.name = name;
    },
    get animalDesc(){
        return this.description;
    },
    set animalDesc(desc){
        this.description=desc;
    }
};
