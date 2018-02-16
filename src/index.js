<script src="http://172.25.230.22:8097"></script>

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyBTVgKAzaR1AFSHxX6RO92aUWS1V3Q6_Mo';

// create new component. This component produces html and state
class App extends Component {
    constructor(props){
        super(props);

        this.state={ 
            videos: [],
            selectedVideo: null
        };
        
        this.videoSearch('surfboards');
    }
    
    videoSearch(term) {
        YTSearch({ key: API_KEY, term: term }, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }

    render() {
        return (
            <div>
                <SearchBar onSearchTermChange={term => this.videoSearch(term)}/>
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList 
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos} />
            </div>
        );
    }
};

// take this component gen in HTML and put in page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));