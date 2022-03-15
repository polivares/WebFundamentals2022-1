var obj = {
    firstName: "Alexis",
    lastName: "Sánchez",
    getLastName: function(){
        return this.lastName;
    }
}

console.log("Nombre:", obj.getLastName());