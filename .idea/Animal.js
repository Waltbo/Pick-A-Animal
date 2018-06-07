function Animal(aName, aDescription) {
        this.aName = aName;
        this.aDescription = aDescription;
    }

Animal.prototype = {
        get animalName() {
            return this.aName;
        },

        set animalName(aName) {
            this.aName = aName;
        },
    get animalDesc(){
            return this.aDescription;
        },
    set animalDesc(desc){
            this.aDescription=desc;
        }
};