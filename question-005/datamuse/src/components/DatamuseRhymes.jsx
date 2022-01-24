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
  };

  const setFormData = function(event) {
    setWord(event.target.value)
  };

  const API = `https://api.datamuse.com/words?rel_rhy=${word}&max=10`;
    useEffect(() => {
      axios.get(API).then(res => {
        setWordsThatRhyne(res.data)
      }).catch(err => {
        // only for testing
        console.log(err.message);
      })
      // setWordsThatRhyne(data)
    }, [API]);

  const parseWordsThatRhyme = Array.isArray(wordsThatRhyme) && wordsThatRhyme.map((rhymeWord, index) => (
    <li key={index}>{rhymeWord.word}</li>
  ));
  
  return (
    <div>
      <form onSubmit={onSubmit}>
        <p>
          <input type="text" name="word"
            value={word} placeholder="Type in word"
            // onChange={event => setWord(event.target.value)} />
            onChange={setFormData} />
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