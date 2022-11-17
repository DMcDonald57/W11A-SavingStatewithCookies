
function SelectClassic() {
    Cookies.set(`Classic`,`selected`);
}
function ConvertableImg() {
    Cookies.set(`Convertable`,`selected`);
}
function NewSchoolImg() {
    Cookies.set(`NewSchool`, `selected`);
}

document.getElementById(`ClassicImg`).addeventlistener(`click`, SelectClassic);