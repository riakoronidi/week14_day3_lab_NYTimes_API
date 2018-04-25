import React from 'react';
import TitleBar from '../components/TitleBar';
import SectionList from '../components/SectionList';
import Story from '../components/Story';


class StoryContainer extends React.Component{
  constructor(props){
    super(props);
    this.handleSelectedSection = this.handleSelectedSection.bind(this);
    this.populateSections = this.populateSections.bind(this);
    this.filterBySection = this.filterBySection.bind(this);
    this.state = {
      stories: [],
      sections: [],
      updatedStoriesbySection: [],
      currentStory: null,
      currentSection: null
    }

  }

  componentDidMount(){
    fetch("https://api.nytimes.com/svc/topstories/v2/home.json?api-key=15327dfabe22421baf384403151cdaaa")
    .then(response => response.json())
    .then(json => this.setState({stories: json.results}))
    .then(this.populateSections);
    // .then(json => {debugger})

  }

  handleSelectedSection(index){
    const selectedSection = index;
    this.setState({currentSection: selectedSection});
  }


  populateSections(){
    //this sorts, selects and brings back the unique sections from the list
    var uniqueSectionArray = [...new Set(this.state.stories.map(story => story.section))]
    this.setState({sections: uniqueSectionArray})
    // debugger;
  }

  filterBySection(){
    const newArray = [];
    // debugger;
    for (let story of this.state.stories){
      if(story.section === this.state.currentSection){
        newArray.push(story);
      };
    };
    this.setState({updatedStoriesbySection: newArray});
  }

  render(){
    return(
      <React.Fragment>
        <TitleBar
        />
        <SectionList
          onHandleSectionSelected={this.handleSelectedSection}
          sections={this.state.sections}
        />
        <button className="button" onClick={this.filterBySection}>Click to Filter Stories</button>
        <Story
          onHandleStorySelected={this.filterBySection}
          sections={this.state.sections}
          stories={this.state.updatedStoriesbySection}
        />
      </React.Fragment>
    )
  }

}

export default StoryContainer;
