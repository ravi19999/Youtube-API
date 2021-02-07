import axios from 'axios';

const KEY = 'AIzaSyB-WmcIeO6awP-4W7i8Vs8CQytc2gP5M-Q';

export default axios.create({
	baseUrl: 'https://www.googleapis.com/youtube/v3',
	params:{
		part:'snippet',
		maxResults:5,
		key: KEY
	}
});

