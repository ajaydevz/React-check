import { useCallback } from "react";


/// syntax for usecallback

const UpdatedFunction = useCallback( (args)=>{
    // action goes here 
},[])


const NewComponent = React.memo((props)=>{
    return (
        <div>
            // render with props
        </div>
    )
},[])


// second way for react memo

const NewComponents =(props)={
    // render with props
}

export default React.memo(NewComponents)




