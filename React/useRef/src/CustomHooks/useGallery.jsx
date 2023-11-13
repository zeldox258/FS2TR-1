import React,{useState} from "react";

function useGallery(initialValue) {

    const[car,setCar] = useState(initialValue.car);

    function addCar(){
        setCar(car+1);
    }

    function removeCar(){
        setCar(car-1);
    }
    function warnClick() {
        alert("I said don't click")
    }

    return {car, addCar, removeCar, warnClick};
}

export default useGallery;