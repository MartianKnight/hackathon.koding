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

// Code
var disasters = function() {
	for(var file in fileList.format()) {

	}
}

disasters.volcano = function() {

}

disasters.earthquake = function() {

}

disasters.volcano = function() {

}

disasters.tornado = function() {

}

function GetScale(stateName) {
||||||| merged common ancestors
function GetScale(stateName) {
=======
function getScale(stateName) {
>>>>>>> 0df0e118ca098643653450552db97d3873d55760
	var fujitaScaleCounts = [0, 0, 0, 0, 0, 0];
	var sum = 0;
	var count = 0;

	potentialDisasters = GetDisaster(stateName);

	var disaster = potentialDisasters.split(" ");

	for(var disasterNumber = 0; disasterNumber < disaster.length; disasterNumber++)
	{
		//update with url
		var jsonString = "data/" + stateName + "_" + disaster[disasterNumber] + ".json";
		console.log("var jsonString: " + jsonString );

		var test = $.getJSON(jsonString, function(data) {
			console.log( "success" );
<<<<<<< HEAD
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
					//console.log(fujitaScaleCounts + " " + sum/count + " " + sum  + " " + count);
			}
||||||| merged common ancestors
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
=======

			GetCounter(data, disaster, disasterNumber);

			//console.log(fujitaScaleCounts + " " + sum/count + " " + sum  + " " + count);
>>>>>>> 0df0e118ca098643653450552db97d3873d55760
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

<<<<<<< HEAD
||||||| merged common ancestors

=======
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

>>>>>>> 0df0e118ca098643653450552db97d3873d55760
function GetDisaster(stateName)
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

<<<<<<< HEAD
// File to parse file names

// Store names

//

//console.log(getJSON());
||||||| merged common ancestors
//console.log(getJSON());
=======
//console.log(getJSON());
>>>>>>> 0df0e118ca098643653450552db97d3873d55760
