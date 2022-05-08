export class Task {
    constructor(name, dane, category = Category.GENERAL) {
        this.name = "Nowe zadanie";
        this.done = true;
        this.name = name;
        this.done = dane;
        this.category = category;
        this.createdAt = new Date();
    }
    logCreationDate(extra) {
        console.log(`Task został stworzony ${this.createdAt} ${extra || ""}`);
    }
}
export var Category;
(function (Category) {
    Category["GENERAL"] = "general";
    Category["WORK"] = "work";
    Category["GYM"] = "gym";
    Category["HOBBY"] = "hobby";
    Category["SOCIAL"] = "social";
})(Category || (Category = {}));
