function renderHighlightedText(text, query, renderer) {
  let currStr = "";
  let arrOfNodes = [];
  let i = 0;
  if (!text.length || !query.length) return arrOfNodes;
  while (i < text.length) {
    const lowerCasedCurrChar = text[i].toLowerCase();
    if (lowerCasedCurrChar !== query[0].toLowerCase()) {
      currStr += text[i];
    }
    else {
      let isMatched = true;
      let j = 1;
      for (; j < query.length; j++) {
        if (text[i + j]?.toLowerCase() !== query[j].toLowerCase()) {
          isMatched = false;
          break;
        }
      }
      if (isMatched) {
        currStr ? arrOfNodes.push(currStr) : null;
        arrOfNodes.push(renderer(text.slice(i, i + j)));
        currStr = "";
      }
      else {
        currStr += query.slice(0, j)
      }
      i = i + j;
      continue;
    }
    i++;
  }
  if (currStr) {
    arrOfNodes.push(currStr);
  }
  console.log(arrOfNodes);
  return arrOfNodes
}

export default renderHighlightedText;