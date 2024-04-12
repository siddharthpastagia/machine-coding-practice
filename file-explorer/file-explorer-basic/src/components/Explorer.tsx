import { useState } from "react"


const Explorer = ({explorer}) => {
    const [expand, setExpand] = useState(false)

    if(explorer?.isFolder){
        return(
            <>
            <div onClick={() => setExpand(!expand)} style={{cursor:'pointer', fontWeight:'bold'}}>{explorer.name}</div>
                {
                    expand && <div style={{paddingLeft: 20 + 'px'}}>
                    {explorer?.items.map((expo)=>{
                        return(
                            <Explorer key={expo.name} explorer={expo}/>
                        )
                    })}
                </div>
                }
            </>
        )
    }else{
        return <div>{explorer?.name}</div>
    }
    
}

export default Explorer