const person={name:"rohan",
email:"098233rohan.com",
fullname: function(){
    return this.email+this.name;
}
};
document.getElementById("div1").innerHTML = person.fullname();
