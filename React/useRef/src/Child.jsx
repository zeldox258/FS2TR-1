import React, {useRef} from "react";


const Child = React.forwardRef((props, ref) => {

    function printAbdullah(){
        console.log("Abdullah");
    }

    const PI = 3.14;


    React.useImperativeHandle(ref, () => ({
        printAbdullah,PI
    }))

    return (
        <div>
            Child component
        </div>
    )

})


export default Child;