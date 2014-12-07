getScale("fl");

function getScale(stateName) {
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

//console.log(getJSON());