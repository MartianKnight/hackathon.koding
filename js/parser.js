<<<<<<< HEAD
// List of static files that we pull json
var fileList = {
  "files": [
    {
      "state": "al",
      "disasters": ["hurricane"],
      "format": "json",
    },
    {
      "state": "ca",
			"disasters": ["quakes"],
			"format": "json",
    },
		{
			"state": "fl",
			"disasters": ["hurricane"],
			"format": "json",
		},
		{
			"state": "hi",
			"disasters": ["quakes"],
			"format": "json",
		},
		{
			"state": "ia",
			"disasters": ["tornado"],
			"format": "json",
		},
		{
			"state": "ks",
			"disasters": ["tornado"],
			"format": "json",
		},
		{
			"state": "nc",
			"disasters": ["hurricane"],
			"format": "json",
		},
		{
			"state": "nv",
			"disasters": ["quakes"],
			"format": "json",
		},
		{
			"state": "ok",
			"disasters": ["tornado"],
			"format": "json",
		},
  ]
}

fileList.format = function() {
	var listOfFileNames = new Array();
	// Walk into json
  for (file in fileList.files) {
    var state = fileList.files[file].state;
		var disasters = fileList.files[file].disasters[0];
		var format = fileList.files[file].format;
		var fileName = state + "_" + disasters + "." + format;
		listOfFileNames.push(fileName);
  }
	return listOfFileNames;
}

fileList.format();
console.log("File List: " + fileList.format());

getScale("fl");

function getScale(stateName) {
	var fujitaScaleCounts = [0, 0, 0, 0, 0, 0];
	var sum = 0;
	var count = 0;

	potentialDisasters = getDisaster(stateName);

	var disaster = potentialDisasters.split(" ");

	for(var disasterNumber = 0; disasterNumber < disaster.length; disasterNumber++)
	{
		//update with url
		var jsonString = "data/" + stateName + "_" + disaster[disasterNumber] + ".json";
		console.log("var jsonString: " + jsonString );

		var test = $.getJSON(jsonString, function(data) {
			console.log( "success" );

			for(var i in data)
			{
					if(!isNaN(data[i].Fujita))
					{
						for(var j=0; j<=5; j++)
						{
							if(Number(data[i].Fujita) == j)
								fujitaScaleCounts[j]++;
						}
						sum += Number(data[i].Fujita);
						count++;
					}
					console.log(fujitaScaleCounts + " " + sum/count + " " + sum  + " " + count);
			}

			GetCounter(data, disaster, disasterNumber);

			//console.log(fujitaScaleCounts + " " + sum/count + " " + sum  + " " + count);
		})
			.done(function() {
				console.log( "second success" );
			})
			.fail(function() {
				console.log( "error" );
			})
			.always(function() {
				console.log( "complete" );
			});

			test.complete(function() {
				console.log( "second complete");// + JSON.stringify(test) );
		});

	}
}

function getTornadoCounter(data, disaster, disasterNumber)
{
	console.log(disaster[disasterNumber -1]);

	for(var i in data)
	{
		if(disaster[disasterNumber - 1] === "tornado" && (!isNaN(data[i].Fujita)))//if((disaster[disasterNumber - 1] === disasterType[type]) && (!isNaN(data[i].Fujita)))
		{
			for(var j=0; j<=5; j++)
			{
				if(Number(data[i].Fujita) == j)
					fujitaScaleCounts[j]++;
			}
			/*sum += Number(data[i].Fujita);
			count++;*/
		}

		/*else if((disaster[disasterNumber - 1] === "hurricane") && (data[i].Max_Classification != null))
		{
			console.log(data[i].Max_Classification);
			for(var j=0; j<=5; j++)
			{
				if(Number(data[i].Max_Classification) == j)
					fujitaScaleCounts[j]++;
			}
			/*sum += Number(data[i].Fujita);
			count++;
		}*/
	}
}

function getDisaster(stateName)
{
	var disaster = ["hurricane", "tornado", "earthquake", "volcano"];
	var disasterState;
	var biCounter = 0;

	for(var i in disaster)
	{
		//update with filename
		//TODO: find out how to check if file is null
		/*if(stateName + "_" + i + ".json" != null)
		{
			if(i === "hurricane")
				biCounter += " hurricane";
			else if(i === "tornado")
				biCounter += " tornado";
			else if(i === "earthquake")
				biCounter += " earthquake";
			else if(i === "volcano")
				biCounter += " volcano";
		}*/
		
	}
	//return biCounter;
	return "hurricane";
}
