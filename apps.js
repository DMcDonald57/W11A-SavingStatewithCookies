
function selectClassic() {
    Cookies.set(`Classic`,`selected`);
}
function selectConvertable() {
    Cookies.set(`Convertable`,`selected`);
}
function selectNewSchool() {
    Cookies.set(`NewSchool`, `selected`);
}

document.getElementById(`ClassicImg`).addEventListener(`click`, selectClassic)
document.getElementById(`ConvertableImg`).addEventListener(`click`, selectConvertable)
document.getElementById(`NewSchoolImg`).addEventListener(`click`, selectNewSchool)