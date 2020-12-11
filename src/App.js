import logo from './logo.svg';
import './App.css';
import React from 'react';
import SearchBar from './SearchBar';
import youtube from './youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    };
  }
  componentDidMount(){
    this.onTermSubmit('buildings');
  }

  onTermSubmit = async term => {
    
    const response = await youtube.get('/search', {
      params:{
        q: term
      }
    });
    
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  };

  onVideoSelect = (video) => {
    this.setState({
      selectedVideo: video
    });
  };

// pass a prop to VideoList
  render(){
    return (
      <div className = "ui container"> 
        <SearchBar onFormSubmit = {this.onTermSubmit}/>
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video = {this.state.selectedVideo} /> 
            </div>
            <div className="five wide column">
              <VideoList onVideoSelect = {this.onVideoSelect} videos = {this.state.videos}/> 
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
