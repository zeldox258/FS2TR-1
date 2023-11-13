import { useState } from "react";

function useUser(initialValue) {
    const[userNum,setUserNum] = useState(initialValue);

    function addUser(){
        setUserNum(userNum+1);
    }

    function removeUser(){
        setUserNum(userNum-1);
    }

    function printUser(){
        console.log(userNum);
    }

    return [userNum, addUser, removeUser, printUser];


}

export default useUser