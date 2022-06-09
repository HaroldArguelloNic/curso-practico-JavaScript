const colombia = [];

colombia.push({
    name: "Juanita",
    salary: 1000,
});
colombia.push({
    name: "Natalia",
    salary: 1500,
});
colombia.push({
    name: "Luisa",
    salary: 1800,
});
colombia.push({
    name: "Carlos",
    salary: 2500,
});
colombia.push({
    name: "Ricardos",
    salary: 4500,
});
colombia.push({
    name: "Katerin",
    salary: 4200,
});
colombia.push({
    name: "Bertha",
    salary: 3800,
});
colombia.push({
    name: "Harold",
    salary: 4000,
});
colombia.push({
    name: "William",
    salary: 3900,
});
colombia.push({
    name: "Robert",
    salary: 2500,
}); 
colombia.push({
    name: "Juanita2",
    salary: 1000,
});
colombia.push({
    name: "Natalia2",
    salary: 1500,
});
colombia.push({
    name: "Luisa2",
    salary: 1800,
});
colombia.push({
    name: "Carlos2",
    salary: 2500,
});
colombia.push({
    name: "Ricardos2",
    salary: 4500,
});
colombia.push({
    name: "Katerin2",
    salary: 4200,
});
colombia.push({
    name: "Bertha2",
    salary: 3800,
});
colombia.push({
    name: "Harold2",
    salary: 4000,
});
colombia.push({
    name: "William2",
    salary: 3900,
});
colombia.push({
    name: "Robert2",
    salary: 5500,
}); 

function agregarPersona() {
    let personName = document.getElementById("inputNombre").value;
    let personSalary = Number(document.getElementById("inputSalario").value);
    colombia.push({name: personName, salary: personSalary});
    document.getElementById("inputNombre").value="";
    document.getElementById("inputSalario").value="";
    document.getElementById("inputNombre").focus();
};
