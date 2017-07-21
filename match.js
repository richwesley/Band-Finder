
module.exports = function(app){

	//calculates difference between user scores and potential friend scores
	function getDifference (userScores, friendScores){
		var difference = 0;
		for (var i=0; i<userScores.length; i++) {
			difference += Math.abs(userScores[i]-friendScores[i]);
		}
		return difference;
	}

	//pushes survey data into array
	function addData(req, res, userArray, friendArray) {
		var surveyData = req.body;
		userArray.push(surveyData);
		findBestFriend(res, userArray, friendArray, surveyData);
	}
		
	//determines best friend based on survey results
	function findBestFriend(res, userArray, friendArray, surveyData) {
		//outside loop to not instantiate with each loop
		var scoreDiff = [];
		var bestFriend = {};
		//populates array of scores differences
		for (var i=0; i<friendArray.length; i++) {
			scoreDiff.push(Math.abs(getDifference(surveyData.scores, friendArray[i].scores)));
		}
		//finds best friend
		var indexSmallestDiff = 0;
		for (var i=1; i<scoreDiff.length; i++) {
			if (scoreDiff[i] < scoreDiff[indexSmallestDiff]) {
				indexSmallestDiff = i;
			}
		}
		bestFriend.name = friendArray[indexSmallestDiff].name;
		bestFriend.photo = friendArray[indexSmallestDiff].photo;
		//sends best friend data to browser
		res.json(bestFriend);
	}

};
