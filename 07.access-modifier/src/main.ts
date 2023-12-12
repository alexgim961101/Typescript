class Post {
    private id: number;
    private title: string;

    constructor(id: number, title: string) {
        this.id = id;
        this.title = title;
    }

    get getId(): number {
        return this.id;
    }

    get getTitle(): string {
        return this.title;
    }
}

const post1 = new Post(1, 'post 1');

console.log(post1.getId);
console.log(post1.getTitle);



