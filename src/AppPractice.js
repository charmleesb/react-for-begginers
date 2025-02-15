import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function AppPractice() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => {
    setValue((prev) => prev + 1);
  }
  const onChange = (event) => {
    setKeyword(event.target.value);
  };
  
  console.log("i run all time.")
  useEffect(() => {
    console.log("CALL THE API...")
  }, []);

  useEffect(() => {
    if(keyword !== "" && keyword.length > 5) {
      console.log("SEARCH FOR", keyword)
    }
  }, [keyword]);

  return (
    <div>
      <input value={keyword} onChange={onChange} type="text" placeholder="Search Here..."/>
      <h1 className={styles.title}>{counter}</h1>
      <Button onClick={onClick} text={"Continue"}/>
    </div>
  );
}

export default AppPractice;
