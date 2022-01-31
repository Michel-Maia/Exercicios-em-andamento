import React, {useState} from 'react';
import '../Counter/Counter.css'

export default function Counter() {
    const [value, setValue] = useState (1)
    const [buttonStyle, setButtonStyle] = useState("counter-button")

    function down () {
        if (value > 0) {
            setValue(value -1)
        }
        
    }

    function up () {
        setValue(value+1)
    }

  return (
    <div className="countex-wrapper">
        <button
            className="couter-button-minus-active"
            onClick={down}
        >
            -
        </button>
            <p>{value}</p>

        <button 
            className="counter-button-plus-active"
            onClick={up}
        >
            +
        </button>

    </div>
  )
}
