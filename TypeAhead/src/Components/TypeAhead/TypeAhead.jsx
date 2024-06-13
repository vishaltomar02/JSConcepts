import React, { useEffect, useState } from "react";
import Input from "../Input/Input"
import useDebounce from "../../hooks/useDebounce";
import List from "../List/List";
import {MockList} from "../../MockList";
import "./TypeAhead.scss"

const TypeAhead = React.memo(function TypeAhead(){
  const [inputValue, setInputValue] = useState("");
  const [validResults, setValidResults] = useState([]);
  const debouncedValue = useDebounce(inputValue, 500);
  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  useEffect(()=> {
    console.log("debounce value changed")
    if(!debouncedValue) {
      setValidResults([])
    }
    else {
      const newValidResults = MockList.filter((item) => item.value.toLowerCase().includes(debouncedValue.toLowerCase()));
      setValidResults(newValidResults);
    }
  }, [debouncedValue]);


  return (
    <div className="typeahead-container">
      <Input
        placeholder="Enter the value"
        value={inputValue}
        type="text"
        defaultValue=""
        handleChange={handleInputChange}
      />
     {validResults.length ? 
     <List
      list={validResults}
      searchedValue={debouncedValue}
      /> : null}
    </div>
  )
})

export default TypeAhead;