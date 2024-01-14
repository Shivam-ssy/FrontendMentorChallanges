import React from "react";
 function ProgressCard(){
    const steps=["STEP 1","STEP 2","STEP 3","STEP 4"]
    //YOUR INFO SELECT PLAN ADD-ONES, SUMMERY
        return(
            <>
            <div className="h-[568px] w-[247px] bg-[url('../bg-sidebar-desktop.svg')] bg-contain bg-no-repeat flex justify-center p-5">
                     {
                        steps?.map((step,i)=>(
                            <div key={i}>
                                <div>{i+1}</div>
                                <p>{step}</p>
                            </div>
                        ))
                     }       
            </div>
            </>
        )
 }

 export default ProgressCard