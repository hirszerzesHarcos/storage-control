"use strict";
const saveBtn = document.getElementById("save");
const loadValueBtn = document.getElementById("loadValue");
const deleteBtn = document.getElementById("delete");
if (saveBtn) {
    saveBtn.addEventListener("click", function () {
        localStorage.value = document.getElementsByTagName("input")[0].value;
    })
}
if (loadValueBtn) {
    loadValueBtn.addEventListener("click", function () {
        const inputElement = document.getElementsByTagName("input")[0];

        inputElement.value = localStorage.getItem("value");
    })
}
if (deleteBtn) {
    deleteBtn.addEventListener("click", function () {
        localStorage.clear();
    })
}