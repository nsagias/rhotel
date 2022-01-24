import { useEffect, useState } from "react";

export default function DatamuseRyhmes() {
  const keyWord = "forgetful";
  const [word, setWord] = useState(keyWord);
  const [wordThatRhyme, setWordsThatRhyne] = useState([]);

  const API = `https://api.datamuse.com/words?rel_rhy=${word}`;
    useEffect(() => {
      axios.get('')
    }, []);
  return (
    <></>
  );
}