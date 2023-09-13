let name = document.getElementById('name');
let phone = document.getElementById('phone');
let submit = document.getElementById('submit');
let container = document.getElementById('container');


console.log(name);
console.log(phone);
console.log(submit);


submit.addEventListener('click',()=>{
    console.log("You clicked submit button");
    console.log(name.value);
    console.log(phone.value);

    name.value = "";
    phone.value = "";

    name.style.backgroundColor = 'red';
    name.style.borderRadius = "25px";
    name.style.color = "green";

    const styles = {
        color: 'red',
        backgroundColor: 'blue',
        fontSize: '20px',
        // Add more styles as needed
    };
      
    Object.assign(phone.style, styles);

    container.classList.add('flexBox');

    let checkPass = document.getElementById('password2');
    console.log(checkPass);
    if(checkPass){
        alert("You already created that instance!!");
    }
    else{
        let pass = document.createElement('input');
        pass.type = 'password';
        pass.id = 'password2';
        pass.placeholder = "Password";
        Object.assign(pass.style, styles);
        console.log(pass);
    
        //container.appendChild(pass);
    
        console.log(container.children)
    
    
    
        container.insertBefore(pass,container.children[container.children.length-1]);
    }

})



/*
registera basildigi zaman, yeni kullaniiyi local storage a kaydet.

Display usersa basinca da butun kullanicilari consoleda printle
*/

let structure = [{mail:"",pass:""},{mail:"",pass:""},{mail:"",pass:""},{mail:"",pass:""}]
let register = document.getElementById(`register`);
let users = document.getElementById(`users`);


register.addEventListener('click',()=>{
   let mails = document.getElementById('mail').value;
   let pass = document.getElementById('password').value;
   let user = {mail:mails,pass:pass};
   let users = JSON.parse(localStorage.getItem('storage'));
   if (users) {
    users.push(user);
    localStorage.setItem('storage',JSON.stringify(users));
    
   }
   else{
    localStorage.setItem('storage',JSON.stringify([user]));
   }
});

users.addEventListener('click', () => {
    let storage1 = JSON.parse(localStorage.getItem('storage'));
    console.log(storage1);
})


const makeFlex = document.querySelector(".makeFlex");
const abdullahContainer = document.querySelector(".abdullahContainer");
console.log(makeFlex);

makeFlex.addEventListener('click',()=>{
    abdullahContainer.classList.add('flexBox');
});