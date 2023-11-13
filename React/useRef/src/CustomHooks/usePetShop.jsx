import React,{useState} from "react";

export default function UsePetShop(props){
const [pets,setPets] = useState(props.pet)
 
function addPet() {
    setPets(pets+1);
}
function removePet(){
    setPets(pets-1)
}
function delPet(){
    setPets(props.pet)
}
return{pets,addPet,removePet,delPet};
}