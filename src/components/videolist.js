import React from 'react';
import VideoItem from './videoItem';

const VideoList = ({ videos, onVideoSelect }) => {
    const rendredlist = videos.map(video => {
        return <VideoItem onVideoSelect={onVideoSelect} video={video} key={video.id.videoId} />

    });

    return (
        <div>
            {rendredlist}

        </div>
    )
}
export default VideoList;