"use strict";
const post1 = {
    id: 1,
    title: 'post 1',
    getDescription(description) {
        return description;
    }
};
post1['description'] = 'hihihi';
let userNames = ['jon', 'alex'];
