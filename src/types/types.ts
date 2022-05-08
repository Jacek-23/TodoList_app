export class Task {
    public name: string = "Nowe zadanie";
    public done: boolean = true;
    public category?: Category;
    
    private createdAt: Date;

    constructor(
        name: string, 
        dane: boolean, 
        category: Category = Category.GENERAL
    ) {
        this.name = name;
        this.done = dane;
        this.category = category;
        this.createdAt = new Date();
    }

    logCreationDate(extra: string) {
        console.log(`Task został stworzony ${this.createdAt} ${extra || ""}`)
    }
}

export enum Category {
    GENERAL = "general",
    WORK = "work",
    GYM = "gym",
    HOBBY = "hobby",
    SOCIAL = "social",
}