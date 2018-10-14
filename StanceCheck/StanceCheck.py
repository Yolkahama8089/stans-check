import sys
import json
import datetime
if sys.version_info[0] < 3:
    import got
else:
    import got3 as got

name = sys.argv[1]
topic = sys.argv[2]

outputID = {}
outputText = {}
outputPermalink = {}
outputDate = {}
outputUsername = {}

tweetCriteria = got.manager.TweetCriteria().setUsername(name).setQuerySearch(topic)
size = len(got.manager.TweetManager.getTweets(tweetCriteria))

for i in range(size):
    tweet = got.manager.TweetManager.getTweets(tweetCriteria)[i]

    outputID[i] = tweet.id
    outputText[i] = tweet.text
    outputPermalink[i] = tweet.permalink
    outputDate[i] = tweet.date.strftime('%m/%d/%Y')

with open('OutputID.json', 'w') as id_data:
    json.dump(outputID, id_data)

with open('OutputPermalink.json', 'w') as permalink_data:
    json.dump(outputPermalink, permalink_data)

with open('OutputText.json', 'w') as text_data:
    json.dump(outputText, text_data)

with open('OutputDate.json', 'w') as date_data:
    json.dump(outputDate, date_data)