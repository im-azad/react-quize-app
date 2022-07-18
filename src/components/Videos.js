import React, { useState } from 'react';
import Video from './Video';
import { Link } from 'react-router-dom';
import useVideoList from '../hooks/useVideoList';
const Videos = () => {
	const [page, setPage] = useState(1);
	const { loading, error, videos, hasMore } = useVideoList(page);
	return (
		<div className='videos'>
			{videos.length > 0 &&
				videos.map((video) =>
					video.noq > 0 ? (
						<Link
							key={video.youtubeID}
							to={{
								pathname: `/quiz/${video.youtubeID}`,
								state: {
									videoTitle: video.title,
								},
							}}
						>
							<Video
								title={video.title}
								id={video.youtubeID}
								noq={video.noq}
							/>
						</Link>
					) : (
						<Video
							title={video.title}
							id={video.youtubeID}
							noq={video.noq}
							key={video.youtubeID}
						/>
					)
				)}
			{!loading && videos.length === 0 && <div>No data found!</div>}
			{error && <div>There was an error!</div>}
			{loading && <div>Loading...</div>}
		</div>
	);
};

export default Videos;
