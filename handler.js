'use strict';

exports.graphql = (event, context, callback) => {
	console.log('Received event {}', JSON.stringify(event, 3));

	const consumerKey = event.argumentos.consumer_key;
	const consumerSecret = event.argumentos.consumer_secret;
  const name = event.handle;
  const selectK = event.selectK;

	console.log('Got an Invoke Request.');
	switch (selectK) {
		case 'helloWorld': {
			callback(null, 'Hello world '+ ' Consumer Key: '+consumerKey+ " Consumer Secret: "+ consumerSecret + " name: "+ name + "ecco la select K : "+selectK);
    }
    case 'helloWorld2': {
      callback(null, 'Hello world 2 '+ ' Consumer Key: '+consumerKey+ " Consumer Secret: "+ consumerSecret+ " name " + name+ "ecco la select K : "+selectK);
			break;
		}

		default: {
			callback(`Unknown field, unable to resolve ${event.field}`, null);
			break;
		}
	}
};
