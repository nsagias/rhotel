import { useEffect, useState } from "react";
import axios from "axios";

const data = [
    {
      "word": "fretful",
      "score": 398,
      "numSyllables": 2
    },
    {
      "word": "regretful",
      "score": 302,
      "numSyllables": 3
    },
    {
      "word": "threatful",
      "score": 129,
      "numSyllables": 2
    }
  ];

export default function DatamuseRyhmes() {
  const keyWord = "forgetful";
  const [word, setWord] = useState("");
  const [wordsThatRhyme, setWordsThatRhyne] = useState([]);
  

  const API = `https://api.datamuse.com/words?rel_rhy=${word}&max=10`;
  const onSubmit = function(event) {
    event.preventDefault();
  
    axios.get(API).then(res => {
      setWordsThatRhyne(res.data)
    }).catch(err => {
      // only for testing
      console.log(err.message);
    })
      setWord("");
  };

 

  const parseWordsThatRhyme = Array.isArray(wordsThatRhyme) && wordsThatRhyme.map((rhymeWord, index) => (
    <li key={index}>{rhymeWord.word}</li>
  ));
  
  return (
    <div>
      <form onSubmit={onSubmit}>
        <p>
          <label>Enter Word to search for that rhymes</label>
          <br />
          <input 
            type="text" 
            name="word"
            value={word} 
            placeholder="Type in word"
            onChange={(event) => setWord(event.target.value)} />
            {/* // onChange={setFormData}  */}
          {/* /> */}
        </p>
        <p className="submit">
          <button type="submit">search</button>
        </p>
      </form>
      <ul>
          {parseWordsThatRhyme}
      </ul>
    </div>
  );
}