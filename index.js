"use strict";
const personsList = [
    {
        firstName: "mahsa",
        familyName: "saedimehr",
        age: "22",
        job: "engineer",
        maritalStatus: "single",
        gender: "female",
        height: "163",
        weight: "52",
        id: "mahsa.sm",
        phoneNumber: "09366198110",
    },
    {
        firstName: "farhad",
        familyName: "lashkari",
        age: "24",
        job: "engineer",
        maritalStatus: "single",
        gender: "male",
        height: "180",
        weight: "65",
        id: "frhd_lkr",
        phoneNumber: "09366602231",
    },
];
const creatUser = (user) => {
    personsList.push(user);
};
const updateUser = (id, user) => {
    const userIndex = personsList.findIndex((item) => item.id === id);
    personsList[userIndex] = user;
};
const names = ['mahsa saedinehr', 'farhad lashkari'];
const sotOrder = ['mahsa saedinehr', 'farhad lashkari'];
const sorter = (x, y) => {
    if (sotOrder.includes(x)) {
        return -1;
    }
    ;
    if (sotOrder.includes(y)) {
        return 1;
    }
    ;
    return 0;
};
names.sort(sorter);
console.log(names);
