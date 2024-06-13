import React, { useEffect } from 'react';
import "./List.scss"
import renderWithHighlightedText from '../../utils';

const List = React.memo(function List(
  {
    list =[
      {
        id: 1,
        value: 'AHello',
      },
      {
        id: 2,
        value: 'Jane Doe'
      }
    ],
    searchedValue = ""
  }
){
  
  const renderHighlightedText = (text) => {
    console.log(text)
    return <span className='blue-text'>{text}</span>
  };

  useEffect(() => {
    console.log("parent changed")
  }, [searchedValue])

  return (
    <div className='list-container'>
      <ul>
        {
          list.map((item) => <li key={item.id} className='list-item'>
          {
            renderWithHighlightedText(item.value, searchedValue, renderHighlightedText)
          }</li>)
        }
      </ul>
    </div>
  )
})

export default List;