"use strict";
class Post {
    constructor(id, title) {
        this.id = id;
        this.title = title;
    }
    get getId() {
        return this.id;
    }
    get getTitle() {
        return this.title;
    }
}
const post1 = new Post(1, 'post 1');
console.log(post1.getId);
console.log(post1.getTitle);
