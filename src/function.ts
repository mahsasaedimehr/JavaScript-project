import { ContactInfoType } from "./type";

export const createListItem =(contactInfo:ContactInfoType):HTMLLIElement =>{
    const listItem = document.createElement("li");
    listItem.className ="py-4 px-1";

    const contactNameElement = document.createElement("h2");
    contactNameElement.className = "text-slate-700";
    contactNameElement.innerText = contactInfo.contactName;

    const contactPhoneNumberElement = document.createElement("p");
    contactPhoneNumberElement.className = "text-slate-700";
    contactPhoneNumberElement.innerText = contactInfo.phoneNumber.toString();

    listItem.appendChild(contactNameElement);
    listItem.appendChild(contactPhoneNumberElement);

    return listItem;
};

export const validateFields = (...fields:string[]):boolean =>{
    return fields.every((fields) => !!fields.toString());
};