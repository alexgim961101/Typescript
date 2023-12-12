interface getDescription {
    (description: string): string;
}

interface Post {
    [key: string]: unknown
    id: number,
    title: string,
    getDescription: getDescription
}

const post1: Post = {
    id: 1,
    title: 'post 1',
    getDescription(description) {
        return description;
    }
}

post1['description'] = 'hihihi';


interface Name {
    [item: number]: string;
}

let userNames: Name = ['jon', 'alex'];