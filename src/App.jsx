import { useState } from "react";
import text from "./data";

const App = () => {
  
  const [count, setCount] = useState(1);
  const [text, setText] = useState([]);

  const handleSubmit = ( e ) => {
    e.preventDefault()
    let amount = parseInt(count)
    
  }

  return (
    <section className="section-center">
      <h4>tired of boring lorem ipsum?</h4>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">paragraphs:</label>
        <input 
          type="number" 
          name="amount" 
          id="amount" 
          min='1' 
          step='1' 
          max='8' 
          value={count} 
          onChange={(e) => setCount(e.target.value)}
        />
        <button className="btn" type="submit">generate</button>
      </form>
    </section>
  )
};
export default App;
