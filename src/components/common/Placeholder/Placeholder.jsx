export function Placeholder({styling}){
    let stylingdata={
        width:styling.width,
        height:styling.height
    }
    return(
        <>
            <div className="placeholder-glow">
                <p className="placeholder bg-secondary" style={stylingdata}></p>
            </div>
        </>
    )
}