'use strict';

exports.graphql = (event, context, callback) => {
	console.log('Received event {}', JSON.stringify(event, 3));

	const consumerKey = event.arguments.consumer_key;
  const selectKey = event.arguments.select_key;
	const consumerSecret = event.arguments.consumer_secret;

	console.log('Got an Invoke Request.');
	switch (selectKey) {
		case 'helloWorld': {
			callback(null, 'Hello world '+ ' Consumer Key: '+consumerKey+ " Consumer Secret: "+ consumerSecret);
    }
    case 'helloWorld2': {
      callback(null, 'Hello world 2 '+ ' Consumer Key: '+consumerKey+ " Consumer Secret: "+ consumerSecret);
			break;
		}

		default: {
			callback(`Unknown field, unable to resolve ${event.field}`, null);
			break;
		}
	}
};
