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
  
  const onSubmit = function(event) {
    event.preventDefault();
    // setWord("");
  }

  const API = `https://api.datamuse.com/words?rel_rhy=${word}`;
    useEffect(() => {
      axios.get(API).then(res => {
        setWordsThatRhyne(res.data)
      })
      // setWordsThatRhyne(data)
    }, [word]);

  const parseWordsThatRhyme = Array.isArray(wordsThatRhyme) && wordsThatRhyme.map((rhymeWord, index) => (
    <li key={index}>{rhymeWord.word}</li>
  ));
  
  return (
    <div>
      <form onSubmit={onSubmit}>
        <p>
          <input type="text" name="word"
            value={word} placeholder="Type in word"
            onChange={event => setWord(event.target.value)} />
            
        </p>
        <p className="submit">
          <button type="submit" name="commit">search</button>
        </p>
      </form>
      <ul>
          {parseWordsThatRhyme}
      </ul>
    </div>
  );
}