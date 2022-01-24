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
  // const [word, setWord] = useState(keyWord);
  const [wordsThatRhyme, setWordsThatRhyne] = useState([]);
  // console.log("keyword", keyWord);
  // console.log("word",word);
  console.log("world that rhyme",wordsThatRhyme);

  // https://api.datamuse.com/words?rel_rhy=forgetful
  // const API = `https://api.datamuse.com/words?rel_rhy=${word}`;
    useEffect(() => {
      // axios.get(API).then(res => {
      //   setWordsThatRhyne(res.data)
      // })
      setWordsThatRhyne(data)
    }, []);

  const parseWordsThatRhyme = Array.isArray(wordsThatRhyme) && wordsThatRhyme.map(rhymeWord => (
    <li>{rhymeWord.word}</li>
  ));
  
  return (
    <ul>
        {parseWordsThatRhyme}
    </ul>
  );
}