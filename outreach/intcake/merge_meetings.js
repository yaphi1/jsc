[
	{startTime: 0,  endTime: 1},
	{startTime: 3,  endTime: 5},
	{startTime: 4,  endTime: 8},
	{startTime: 10, endTime: 12},
	{startTime: 9,  endTime: 10},
]





/*

keep track of merged times

for each new timeframe:
	
	if within range, expand time

	var withinRange = currentStart<=endTime || currentEnd>=startTime;

	if currentStart <= endTime
		change endTime to currentEnd

	if currentEnd >= startTime
		change startTime to currentStart

	if(!withinRange){
		add entry to list of merged times
	}


*/


// attempt 1

function condenseMeetingTimes(times) {
	if(times.length<1){ return []; }

	var mergedTimes = [times[0]];

	function inRange(time, start, end){
		return time>=start && time<=end;
	}

	for(var i=1; i<times.length; i++){
		for(var j=0; j<mergedTimes.length; j++){
			var startInRange = inRange(times[i].startTime, mergedTimes[j].startTime, mergedTimes[j].endTime);
			var endInRange = inRange(times[i].endTime, mergedTimes[j].startTime, mergedTimes[j].endTime);
			var withinRange = startInRange || endInRange;

			if(startInRange){
				mergedTimes[j].endTime = times[i].endTime;
			}

			if(endInRange){
				mergedTimes[j].startTime = times[i].startTime;
			}

			if(!withinRange){
				mergedTimes.push(times[i]);
			}
		}
	}

	return JSON.stringify(mergedTimes);
}




// attempt 2
function condenseMeetingTimes(times) {
	if(times.length<1){ return []; }

	times.sort(function(a,b){
		return a.startTime - b.startTime;
	});

	var mergedTimes = [times[0]];
	var mergeIndex = 0;

	for(var i=1; i<times.length; i++){
		mergeIndex = mergedTimes.length - 1;

		if(times[i].startTime <= mergedTimes[mergeIndex].endTime){
			mergedTimes[mergeIndex].endTime = Math.max(mergedTimes[mergeIndex].endTime, times[i].endTime);
		}
		else{
			mergedTimes.push(times[i]);
		}
	}

	return JSON.stringify(mergedTimes).replace(/\},/g,'}\n');
}









