import { useState, useRef } from "react";

export default function Player() {
  const pname = useRef();

  const [savePname, setSavePname] = useState(null)

  function handleClick(){
    setSavePname(pname.current.value)
    pname.current.value=''
  }
  return (
    <section id="player">
      <h2>Welcome { savePname ?? 'unknown'}</h2>
      <p>
        <input ref= {pname} type="text"/>
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
