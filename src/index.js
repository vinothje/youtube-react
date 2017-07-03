/**
 * Created by vinothjeevanandam on 6/27/17.
 */
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const api_key = 'AIzaSyDvxATKNGqhUlfQ82LHHzaLQYO6aXhdAMQ';
import _ from 'lodash';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [],
        selectedVideo: null
    };
    this.videoSearch('surfboards')
  }

  videoSearch(term) {
      YTSearch({key: api_key, term: term}, (videos) => {
          this.setState({videos});
          this.setState({selectedVideo: videos[0]});
      });
  }
  render() {
      const videoSearch = _.debounce( term => { this.videoSearch(term) }, 300);
    return (
      <div>
        <SearchBar onSearchTerm={videoSearch} />
        <div className="container">
          <div>
            <VideoDetail video={this.state.selectedVideo}/>
          </div>
        <div>
          <VideoList
              onVideoSelect={selectedVideo => this.setState({selectedVideo})}
              videos={this.state.videos}/>
        </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
