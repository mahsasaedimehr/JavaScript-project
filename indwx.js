const personList = [
    {
        name:"mahsa",
        age:"22",
        id:"mahsa.sm",
        degree:"computer",
    },

    {
        name:"shakiba",
        age:"23",
        id:"sh.lkr",
        degree:"computer",
    },

    {
        name:"farhad",
        age:"24",
        id:"frhd_lkr",
        degree:"computer",
    },

    {
        name:"maryam",
        age:"32",
        id:"maryam_salehi",
        degree:"dentis",
    }

];
console.log(personList)

const creatUser = () => {
  personList.push(user);  
};

const updateUser = () => {
    const userIndex = personList.findIndex((item) => item.id === id);
    personList[userIndex] = user
};