import React from 'react';
import SearchBar from './searchbar';
import youtube from '../apis/youtube';
import VideoList from './videolist';
import VideoDetail from './videodetail';
import './app.css';

class App extends React.Component {
    state = { videos: [], selectedvideo: null };
    onTermSubmit = async (term) => {

        const res = await youtube.get('/search', {
            params: { q: term }
        });
        this.setState({ videos: res.data.items });
    };
    onVideoSelect = (video) => {
        this.setState({ selectedvideo: video });
    }

    render() {
        return (
            < div className="container-app">
                <div className="ui containe">
                    <SearchBar onFormSubmit={this.onTermSubmit} />
                    <div className="ui grid">
                        <div className="ui row">
                            <div className="eleven wide column">
                                <VideoDetail video={this.state.selectedvideo} />

                            </div>
                            <div className="five wide column">
                                <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        );
    }

}

export default App;