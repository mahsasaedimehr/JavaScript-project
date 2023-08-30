type DailyText = {
    id:string;
    title:string;
    text:string;
};

const titleInput = document.querySelector<HTMLInputElement>("#title");
const submitButton = document.querySelector<HTMLButtonElement>("#submitButton");
 
submitButton?.addEventListener("click", () =>{
    console.log(titleInput?.value);
});