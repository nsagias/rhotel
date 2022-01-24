import { useEffect, useState } from "react";
import axios from "axios";

export default function DatamuseRyhmes() {
  const keyWord = "forgetful";
  const [word, setWord] = useState(keyWord);
  const [wordThatRhyme, setWordsThatRhyne] = useState([]);
  console.log(keyWord);
  console.log(word)
  console.log(wordThatRhyme)

  const API = `https://api.datamuse.com/words?rel_rhy=${word}`;
    useEffect(() => {
      axios.get(API).then(res => {
        setWordsThatRhyne(res.data)
      })
    }, []);
  return (
    <>{wordThatRhyme}</>
  );
}