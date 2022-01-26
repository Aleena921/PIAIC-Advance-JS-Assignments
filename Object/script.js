function submit(){
    let firstnameInput= document.querySelector("#Firstname");
    console.log(firstnameInput);
    console.log(firstnameInput.value);
    let userDetails={
        firstName: firstnameInput.value
    }
    console.log(userDetails)
}
