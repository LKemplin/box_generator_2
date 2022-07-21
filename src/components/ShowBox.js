
const ShowBox = (props) => {
    const {colorBoxArray} = props
    return (
        colorBoxArray.map((color, index) =>
            <div key={index} style={{height: "200px", width: "200px", backgroundColor: color, display: "inline-block", margin: "10px"}}>

            </div>
        
        )
    )
}

export default ShowBox;