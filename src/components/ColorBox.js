import {useState} from 'react';

const ColorBox = (props) => {
    const {colorBoxArray, setColorBoxArray} = props

    const [color, setColor] = useState('')

    const createBox = (e) => {
        e.preventDefault();
        if (color){
            setColorBoxArray([...colorBoxArray, color])
        }
        setColor('')
    }


    return (
        <div>
            <form onSubmit={createBox}>
                <label>Color</label>
                <input type="text" name="color" onChange={(e) => setColor(e.target.value)}/>
                <button>Add</button>
            </form>
        </div>
    )
}

export default ColorBox;