import React,{useState} from "react";

function useLibrary(initialValues){
    const[bookNum,setBookNum] = useState(initialValues.bookNum);

    function addBook(){
        setBookNum(bookNum+1);
    }

    function removeBook(){
        setBookNum(bookNum-1);
    }

    return {bookNum, addBook, removeBook};

}

export default useLibrary;