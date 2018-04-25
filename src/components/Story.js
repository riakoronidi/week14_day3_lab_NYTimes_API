import React from 'react';

const Story = (props) => {
  console.log(props.sections);

  return(
    <article className="story">
      <ol onSelect={props.onHandleStorySelected}>
        {props.stories.map((story, index) => {
          return <li key={index}>{story.title} <a href={story.short_url}>Read the full story</a></li>
        })}
      </ol>
    </article>
  )

}

export default Story;
