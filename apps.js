
function selectClassic() {
    Cookies.set(`Classic`,`selected`);
    location.href = `selection.html`;
    // document.getElementById(`ClassicImg`).;
    
}

function selectConvertable() {
    Cookies.set(`Convertable`,`selected`);
    location.href = `selection.html`
}
function selectNewSchool() {
    Cookies.set(`NewSchool`, `selected`);
    location.href = `selection.html`
}

// function displaySelection(event) {
//     let ClassicImg = document.getElementById(`classicImg`);
//     details.target.src = `https://images.unsplash.com/photo-1615238359019-c8de4242e083?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2FtYXJvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60" height="300px"`;
//     ClassicImg.location.href = `selection.html`
// }



document.getElementById(`ClassicImg`).addEventListener(`click`, selectClassic)
document.getElementById(`ConvertableImg`).addEventListener(`click`, selectConvertable)
document.getElementById(`NewSchoolImg`).addEventListener(`click`, selectNewSchool)

