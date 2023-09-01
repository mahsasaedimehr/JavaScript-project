export type contactProps={
    id:string;
    contactName:string;
    phoneNumber:string | number;
    storage:"SIM" | "Device";
    avatar:string | null;
};

export type contactsListType = contactProps[];