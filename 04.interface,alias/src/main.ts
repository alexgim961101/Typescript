// interface
// interface Animal {
//     name: string;
// }

// interface Bear extends Animal {
//     honey: boolean;
// }

// const bear1: Bear = {
//     name: 'alex',
//     honey: true,
// }

// type
type Animal = {
    name: string
}

type Bear =  Animal & {
    honey: boolean
}

const bear1: Bear = {
    name: 'alex',
    honey: true
}