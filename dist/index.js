"use strict";
const titleInput = document.querySelector("#title");
const submitButton = document.querySelector("#submitButton");
submitButton === null || submitButton === void 0 ? void 0 : submitButton.addEventListener("click", () => {
    console.log(titleInput === null || titleInput === void 0 ? void 0 : titleInput.value);
});
