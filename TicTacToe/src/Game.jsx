import { useState } from "react";

const getItemsList = (data) => {
  return getRandomiseList([...Object.keys(data), ...Object.values(data)]);
}

const getRandomiseList = (list) => {
  for(let i = list.length-1; i > 0; i--) {
    let currEl = list[i];
    let shuffledPos = Math.round(Math.random() * i);
    console.log("random Number", shuffledPos, i);
    list[i] = list[shuffledPos];
    list[shuffledPos] = currEl;
  }
  console.log("two", list)
  return list;
}

const Game = ({data = {}}) => {
  const [lisOfItems, setListOfItems] = useState(getItemsList(data));
  const [selectedPair, setSelectedPair] = useState([]);
  const [selectionResult, setSelectionResult] = useState(-1);

  function handleItemClick(item) {
    if(selectionResult !== -1) return;
    if(!selectedPair[0]) {
      setSelectedPair([item]);
    }
    else if(selectedPair[0]) {
      setSelectedPair([selectedPair[0], item]);
      let isSelectionCorrect = false;
      if(
        data[item] === selectedPair[0] ||
        data[selectedPair[0]] === item
      ) isSelectionCorrect = true;
      setSelectionResult(isSelectionCorrect);
      setTimeout(() => {
        if(isSelectionCorrect) {
          setListOfItems(prev => {
            return prev.filter((elem) => {
              return ![selectedPair[0], item].includes(elem)
            });
          });
        }
        setSelectedPair([]);
        setSelectionResult(-1);
      }, 1000);
    }
  }

  console.log(selectedPair, selectionResult)

  return (
    <main className="list-container">
      {
        lisOfItems.map((item, idx) => {
          return <button 
          onClick={() => handleItemClick(item)}
          key={idx}
          className="btn"
          style={{
            borderColor: 
            selectedPair.includes(item) ? 
              (selectionResult !== -1 ?
              selectionResult ? "#66cc99" : "red" : "blue") : "#414141"
          }}
          name="item">
            {item}
          </button>
        })
      }
      {
        !lisOfItems.length ? "Congratulations" : null
      }
    </main>
  )
}

export default Game;