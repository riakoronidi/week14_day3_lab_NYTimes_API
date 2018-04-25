import React from 'react';

const SectionList = (props) => {

  const handleChange = function(event) {
    let index = event.target.value;
    // debugger;
    props.onHandleSectionSelected(index);
  }

  return(
    <React.Fragment>
    <div>
      <select onChange={handleChange} defaultValue="default">
        <option disabled value="default">Which Section?</option>
        {props.sections.map((section) => {
          return <option key={section} value={section}>{section}</option>
        })}
      </select>
    </div>
    </React.Fragment>
  )
}


export default SectionList;
