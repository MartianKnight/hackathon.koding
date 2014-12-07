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

/*function getTornadoCounter(data, disaster, disasterNumber)
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
		}
	}
}
*/

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




/*
 * NOTE: The following have not been tested. Use at your own peril.
 * These functions require the JSON array passed through them. 
 * So, while reading a JSON file, pass through what you now have 
 * named the "data" variable into these functions.
 * --Daniel
 */

function getTornadoCounter(tornadoJson){
	//TODO: Check (if statement) that tornadoInstance has Fujita attribute
	//TODO: Return counts in dictionary/json format
	//TODO: consider renaming variables
	//TODO: test
	
	// Initializes Fujita scale counts
	// The 0th element of the array corresponds to the amount of
	// times that tornadoes of Fujita scale 0 appear in the dataset, etc.
	var fujitaCounts = [0, 0, 0, 0, 0, 0];
	
	for(tornadoInstance in tornadoJson) {
	//for(var tornadoId = 0; tornadoId < tornadoJson.length; tornadoId++) {

		for(var fujitaValue = 0; fujitaValue <= fujitaCounts.length; fujitaValue++) {
		// loop through all possible Fujita Scale values
		
			if(Number(tornadoJson[tornadoInstance].Fujita) === fujitaValue) {
			// Add the Fujita Scale value from this instance to count array
				fujitaCounts[fujitaValue]++;
			}
		
		}
	
		// Possible alternative way, may be less readable:
		// fujitaCounts[Number(tornadoJson[tornadoCounter].Fujita)]++
	}

	return fujitaCounts;
}

function getVolcanoCounter(volcanoJson){
	// Initializes VEI scale counts
	// The 0th element of the array corresponds to the amount of
	// times that volcanos of VEI scale 0 appear in the dataset, etc.

	//TODO: Check (if statement) that volcanoJson has VEI attribute
	//TODO: Return counts in dictinary/json format
	//TODO: consider renaming variables
	//TODO: test
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

		for(var quakeValue = 0; quakeValue <= quakeCounts.length; quakeValue++) {
		// loop through all possible Richter Scale values

			
			if(Math.floor(Number(volcanoJson[volcanoInstance].EQ_PRIMARY)) === veiValue) {
			// Add the Richter Scale value from this instance to count array

				veiCounts[veiValue]++;
			}
		
		}
		// Possible alternative way, may be less readable:
		// magnitudeCounts[Number(quakeJson[quakeId].EQ_PRIMARY)]++
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

	// count all possible hurricane categories as they appear in the .json files
	for(hurricane_instance in hurricaneJson) {
		
		switch(hurricane_instance.Max_classification) {

			case "TropicalLow":
				tropicalLowCount++;
				break;
			case "Tropical Storm":
				tropicalStormCount++;
				break;
			case "Tropical Depression":
				tropicalDepressionCount++;
				break;
			case "Category 1":
				category1Count++;
				break;
			case "Category 2":
				category2Count++;
				break;
			case "Category 3":
				category3Count++;
				break;
			case "Category 4":
				category4Count++;
				break;
			case "Category 5":
				category5Count++;
				break;
			case default:
				console.log("ERROR: Category " + hurricane_instance.Max_classification + " not expected.");
		}
	}

	return [tropicalLowCount, tropicalStormCount, tropicalDepressionCount, category1Count, category2Count, category3Count, category4Count, category5Count];
}
