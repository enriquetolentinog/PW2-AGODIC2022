import React, {useState} from 'react'

export default function FunctionalComponent() {
    const [texto, setTexto] = useState("");

    const handleInputChange = (e) => {
        setTexto(e.target.value);
    }

  return (
    <div>
        <input type="text" value={texto} onChange={handleInputChange} />
    </div>
  )
}
