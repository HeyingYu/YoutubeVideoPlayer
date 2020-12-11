import axios from 'axios';

const KEY = 'AIzaSyC9-NXMoSa-KDtdOo-57SH4K6H4FofWmKE';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part : 'snippet',
		maxResults: 5,
		key: KEY
	}
});