GetScale("ok");

function GetScale(stateName) {
	var fujitaScaleCounts = [0, 0, 0, 0, 0, 0];
	var sum = 0;
	var count = 0;

	potentialDisasters = GetDisaster(stateName);

	var disaster = potentialDisasters.split(" ");

	console.log("var disaster:" + disaster);
	console.log("var potentialDisasters:" + potentialDisasters);
	console.log("var disaster.length:" + disaster.length);

	for(var x = 0; x < disaster.length; x++)
	{
		console.log(disaster[x]);
		//update with url

		// Assign handlers immediately after making the request,
// and remember the jqxhr object for this request

// Perform other work here ...
// Set another completion function for the request above

		var jsonString = "data/" + stateName + "_" + disaster[x] + ".json";
		console.log("var jsonString: " + jsonString );

		var test = $.getJSON(jsonString, function( data ) {
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
		console.log( "second complete" + JSON.stringify(test) );
		});

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
	return "tornado";
}

//console.log(getJSON());
