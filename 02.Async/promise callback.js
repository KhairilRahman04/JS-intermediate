//latihan request pakai callback function

// // callback version
// const requestCallback = (url, success, failure) => {
// 	const delay = Math.floor(Math.random() * 4500) + 500;
// 	setTimeout(() => {
// 		if (delay > 4000) {
// 			failure('Error: Connection Timeout');
// 		} else {
// 			success(`Success: ${url} (${delay}ms)`);
// 		}
// 	}, delay);
// };

// Promise version
const requestPromise = (url) => {
	return new Promise((resolve, reject) => {
		const delay = Math.floor(Math.random() * 4500) + 500;
		setTimeout(() => {
			if (delay > 4000) {
				reject('Error: Connection Timeout');
			} else {
				resolve(`Success: ${url} (${delay}ms)`);
			}
		}, delay);
	});
};

requestPromise('movie.com')
	.then((result) => {
		console.log('page 1');
		console.log(result);
		return requestPromise('movie.com');
	})
	.then((result) => {
		console.log('page 2');
		console.log(result);
		return requestPromise('movie.com');
	})
	.then((result) => {
		console.log('page 3');
		console.log(result);
		return requestPromise('movie.com');
	})
	.catch((err) => {
		console.log(err);
	});
