module.exports = app => {
    // Create a new Expo SDK client
    const Expo = require('expo-server-sdk');
    let expo = new Expo();

    // Some Push Tokens = ['BFcbZFK1Jq3XeLplV883K-', 'I0840vIVmOpD5ItQVgluYm'];
    app.sendNotification = (title, message, tokens) => {
        if (tokens != null && Array.isArray(tokens) && tokens.length > 0) {
            let messages = [];
            // Create the messages that you want to send to clents
            for (let i = 0; i < tokens.length; i++) {
                const pushToken = 'ExponentPushToken[' + tokens[i] + ']';

                // Check that all your push tokens appear to be valid Expo push tokens
                if (!Expo.isExpoPushToken(pushToken)) {
                    console.error(`Push token ${pushToken} is not a valid Expo push token`);
                    continue;
                }

                // Construct a message (see https://docs.expo.io/versions/latest/guides/push-notifications.html)
                messages.push({
                    to: pushToken,
                    sound: 'default',
                    title: title,
                    body: message,
                    data: {appId: 'sscc', message},
                    badge: 1
                })
            }

            if (messages.length > 0) {
                let chunks = expo.chunkPushNotifications(messages);
                (async () => {
                    for (let chunk of chunks) {
                        try {
                            let receipts = await expo.sendPushNotificationsAsync(chunk);
                            console.log(receipts);
                        } catch (error) {
                            console.error(error);
                        }
                    }
                })();
            }
        }
    };

    // app.sendNotification('abc', 'Hello 123', ['BFcbZFK1Jq3XeLplV883K-', 'I0840vIVmOpD5ItQVgluYm']);
};