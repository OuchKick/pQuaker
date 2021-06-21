import urllib.request  # instead of urllib2 like in Python 2.7
import json

def printResults(data):
    # Use the json module to load the string data into a dictionary
    theJSON = json.loads(data)

    # print the events that only have a magnitude greater than 2.5
    for i in theJSON["features"]:
        if i["properties"]["mag"] >= 2.5:
            print("%2.1f" % i["properties"]["mag"], i["geometry"]["coordinates"])


def main():
    # define a variable to hold the source URL
    # In this case we'll use the free data feed from the USGS
    # This feed lists all earthquakes for the last day larger than Mag 2.5
    urlData = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson"

    # Open the URL and read the data
    webUrl = urllib.request.urlopen(urlData)
    
    if (webUrl.getcode() == 200):
        data = webUrl.read().decode("utf-8")
        # print out our customized results
        printResults(data)
    else:
        print("Received an error from server, cannot retrieve results " +
              str(webUrl.getcode()))


if __name__ == "__main__":
    main()