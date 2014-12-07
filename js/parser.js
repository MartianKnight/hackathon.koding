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
      "state": "hi",
      "disasters": ["volcano"],
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
    {
      "state": "ak",
      "disasters": ["volcano"],
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

getScale();

function getScale() {
	var sum = 0;
	var count = 0;

	//potentialDisasters = fileName.format();//getDisaster(stateName);

	var disaster = fileList.format(); //potentialDisasters.split(" ");

	//console.log(disaster);

	for(var disasterNumber = 0; disasterNumber < disaster.length; disasterNumber++)
	{
		//update with url
		var jsonString = "data/" + disaster[disasterNumber];
		console.log("var jsonString: " + jsonString );
		//console.log("bfr json disas num: " + disasterNumber);

		//var test = 
		(function(disasterNumber) {$.getJSON(jsonString, function(data) {
				console.log("success");

				console.log("switch " + disaster[disasterNumber].substring(3, disaster[disasterNumber].length - 5));
				console.log("disas num: " + disasterNumber)

				//TODO: fix to see if there's a contains function in javascript
				switch(disaster[disasterNumber].substring(3, disaster[disasterNumber].length - 5)) {
					case "tornado":
						console.log(disaster[disasterNumber] + getTornadoCounter(data));
						break;
					case "hurricane":
						console.log(disaster[disasterNumber] + getHurricaneCounter(data));
						break;
					case "quakes":
						console.log(disaster[disasterNumber] + getEarthquakeCounter(data));
						break;
					case "volcano":
						console.log(disaster[disasterNumber] + getVolcanoCounter(data));
						break;
					default:
						console.log("didn't get disaster" + disaster[disasterNumber]);
				}
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

				/*test.complete(function() {
					console.log( "second complete");// + JSON.stringify(test) );
			});*/
		})(disasterNumber);
	}
}

function getTornadoCounter(tornadoJson){
	//TODO: Return counts in dictionary/json format

	// Initializes Fujita scale counts
	// The 0th element of the array corresponds to the amount of
	// times that tornadoes of Fujita scale 0 appear in the dataset, etc.
	
	//var fujitaCounts = [0, 0, 0, 0, 0, 0];
	var fujitaCounts = {
		"Fujita0":0,
		"Fujita1":0,
		"Fujita2":0,
		"Fujita3":0,
		"Fujita4":0,
		"Fujita5":0
	}
	for(tornadoInstance in tornadoJson) {
	//for(var tornadoId = 0; tornadoId < tornadoJson.length; tornadoId++) {

		for(var fujitaValue = 0; fujitaValue <= fujitaCounts.length; fujitaValue++) {
		// loop through all possible Fujita Scale values

			if(Number(tornadoJson[tornadoInstance].Fujita) === fujitaValue) {
			// Add the Fujita Scale value from this instance to count array
				//fujitaCounts[fujitaValue]++;
				console.log("dan the man: " + fujitaCounts["Fujita" + fujitaValue]);//= fujitaCounts["Fujita" + fujitaValue] + 1);
			}
		}
	}
	
	return fujitaCounts;
}

function getVolcanoCounter(volcanoJson){
	// Initializes VEI scale counts
	// The 0th element of the array corresponds to the amount of
	// times that volcanos of VEI scale 0 appear in the dataset, etc.

	//TODO: Return counts in dictinary/json format
	var veiCounts = [0, 0, 0, 0, 0, 0, 0, 0, 0];

	for(volcanoInstance in volcanoJson) {

		for(var veiValue = 0; veiValue <= veiCounts.length; veiValue++) {
		// loop through all possible VEI Scale values


			if(Number(volcanoJson[volcanoInstance].VEI) === veiValue) {
			// Add the VEI Scale value from this instance to count array

				veiCounts[veiValue]++;
			}

		}
	}

	return veiCounts;
}

function getEarthquakeCounter(quakeJson){
	// The 0th element of the array corresponds to a magnitude of 4-4.9 on
	// the Richter Scale, etc.
	// TODO: Check (if statement) that EQ_PRIMARY attribute exists
	// TODO: Return counts in dictionary/json format
	// TODO: consider renaming variables
	// TODO: test
	var magnitudeCounts = [0, 0, 0, 0, 0];

	for(quakeInstance in quakeJson) {
	//for(var quakeId = 0; quakeId <= quakeJson; quakeId++){

		for(var quakeValue = 4; quakeValue <= magnitudeCounts.length + 4; quakeValue++) {
		// loop through all possible Richter Scale values

			if(Math.floor(Number(quakeJson[quakeInstance].EQ_PRIMARY)) === quakeValue) {
			// Adds the Richter Scale value from this instance to count array
				magnitudeCounts[quakeValue - 4]++;
			}
		}
	}

	return magnitudeCounts;

}

function getHurricaneCounter(hurricaneJson){
	// initialize category count
	// TODO: return category counts in dictionary/json format
	var tropicalLowCount = 0;
	var tropicalDepressionCount = 0;
	var tropicalStormCount = 0;
	var category1Count = 0;
	var category2Count = 0;
	var category3Count = 0;
	var category4Count = 0;
	var category5Count = 0;
	var subTropicalStormCount = 0;

	// count all possible hurricane categories as they appear in the .json files
	for(hurricane_instance in hurricaneJson) {
		//TODO: surround with try catch
		if(!hurricaneJson[hurricane_instance]["Max_Classification"])
		{
			var Max_Classification = "Max Classification";
		}
		else
			var Max_Classification = "Max_Classification";
		var classificationMinusSpace = hurricaneJson[hurricane_instance][Max_Classification].replace(/\s+/g, '');
		switch(classificationMinusSpace) {//hurricaneJson[hurricane_instance].Max_Classification) {
			case "TropicalLow":
				tropicalLowCount++;
				break;
			case "TropicalStorm":
				tropicalStormCount++;
				break;
			case "TropicalDepression":
				tropicalDepressionCount++;
				break;
			case "SubTropicalStorm":
				subTropicalStormCount++;
				break;
			case "Category1":
				category1Count++;
				break;
			case "Category2":
				category2Count++;
				break;
			case "Category3":
				category3Count++;
				break;
			case "Category4":
				category4Count++;
				break;
			case "Category5":
				category5Count++;
				break;
			default:
				console.log("ERROR: Category " + hurricaneJson[hurricane_instance].Max_Classification + " not expected.");
			}
		}

	return [tropicalLowCount, subTropicalStormCount, tropicalStormCount, tropicalDepressionCount, category1Count, category2Count, category3Count, category4Count, category5Count];
}
