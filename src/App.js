import React, {useState} from 'react';
import './App.css';

function App() {
        const [formName, setFormName] = useState('');
        const [formAge, setFormAge] = useState(0);
        const [formComments, setFormComments] = useState('');
        const [formNewsLetter, setFormNewsLetter] = useState(false);

        function handleSubmit(e){
            e.preventDefault();
            console.log(formComments, formNewsLetter, formAge, formName);

    }
  return (
    <form onSubmit={handleSubmit}>
        <fieldset>
        <legend>Gegevens</legend>
            <br/>
        <label forhtml="details-name">
            Naam:
            <input
            type="text"
            name="name"
            id="details-name"
            value={formName}
            onChange={(e)=> setFormName(e.target.value)}
            />
        </label>
            <br/>
            <br/>

        <label forhtml="details-age">
            Leeftijd:
            <input
            type="number"
            name="age"
            id="details-age"
            value={formAge}
            onChange={(e) => setFormAge(parseInt(e.target.value))}
            />
         </label>
            <br/>
            <br/>
         </fieldset>
        <br/>

         <fieldset>
             <br/>
             <legend>Jouw review</legend>


            <label forhtml="field-comments">
                Opmerkingen:
                <br/>


                <textarea
                    name="comments"
                    id="field-comments"
                    rows="4"
                    cols="40"
                    placeholder="Wat vond je van het recept?"
                    value ={formComments}
                    onChange={(e)=>setFormComments(e.target.value)}
                >
                </textarea>
                <br/>
            </label>


            <label forhtml="field-newsletter">
                <input
                type="checkbox"
                name="subscribe"
                checked={formNewsLetter}
                onChange={() => setFormNewsLetter(!formNewsLetter)}
                />
                Ik schrijf me in voor de nieuwsbrief
            </label>
             <br/>
             <br/>


            <button
                type="submit">
                Versturen
            </button>
        </fieldset>
    </form>
  );
}

export default App;
