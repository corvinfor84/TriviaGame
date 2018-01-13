 $("#start-button").click(function(){

  	var number = 90;
  	
    $("#start-button").on("click", start);  

    function start(){
    	counter = setInterval(timer, 1000);
    	
    	showMe("#questions");
    	showMe('#answer0');
    	showMe('#answer1');
    	showMe('#answer2');
    	showMe('#answer3');
	    hideMe("#start-button");
	    hideMe("#info-rules");
	    hideMe("#restart");
	    hideMe("#results");
    }
    function timer(){
      number--; // counts down the timer.
      $("#time").html(number);
      if (number === 0){
      	clearInterval(counter);
      	nextQuest();
      	restart();
      	wrongChoice ++;
        // alert("Game Over")
        // stop(); // calls the stop function
        console.log(number);
        
      }
    }

    // function finish(){
    // 	number = 1; // if number is equal to 0 number will show -1 so 1 has to be selected
    // 	clearInterval(counter); // stops the timer
    // 	timer();

    // }


    function gameOver(){
    	
    }
    gameOver();

    function restart(){
    	number = 90;
    	start();
    }

    function hideMe(e) {
    	$(e).hide();
    }
    function showMe(e) {
    	$(e).show();
    }

    $('#restart').click(function(){
    	clean();
    	restart();
    	mainQuest();
    	
    })


// ----------------------------------------------------------------
//calling function
  	start();  
  });


		$("#questions").hide();
		$("#answer0").hide();
		$("#answer1").hide();
		$("#answer2").hide();
		$("#answer3").hide();
		$('#result').hide();
		$('#restart').hide();
		$('#button-1').hide();
		$('#info-rules').show();

			var quotes, qCount, score, time, wrongChoice, correctChoice, right, counter,theTimer;

			function clean(){
			qCount = 0;
			wrongChoice = 0;
			correctChoice = 0;
			counter = 0
			$('#wrongAnswer').html(wrongChoice);
			$('#correct').html(correctChoice);
			}
			clean();

			quotes = [
				{
				name: 1,
				question: '"An adversary is more hurt by desertion than by slaughter."',
				options:['Vegetius', 'Sophocles', 'Sun Tzu', 'Homer'],
				correct: 0,
			},
			{
				name: 2,
				question: '"Let him who desires peace prepare for war."',
				options:['Atlas', 'Roanald Reagan', 'Sun Tzu', 'Vegetius'],
				correct: 3,
				},
			{
				name: 3,
				question: '"He serves me most, who serves his country best"',
				options:['Sun Tzu', 'Abraham Lincoln', 'Homer', 'FDR'],
				correct: 2,
				},
			{
				name: 4,
				question: '"Quick decisions are unsafe decisions."',
				options:['George Bush', 'Sophocles', 'FDR', 'Sun Tzu'],
				correct: 1,
				},
			{
				name: 5,
				question: '"All warfare is based on deception."',
				options:['Atlas', 'Sun Tzu', 'Serius', 'Donald Trump'],
				correct: 1,
				},
			{
				name: 6,
				question: '"Let him who desires peace prepare for war."',
				options:['Atlas', 'Bill Clinton', 'Aeschylus', 'Vegetius'],
				correct: 9,
				},
			{
				name: 7,
				question: '"In peace, sons bury their fathers, in war, fathers bury their sons."',
				options:['Plato', 'Tacitus', 'Herodotus', 'Aeschylus'],
				correct: 2,
				},
			{
				name: 8,
				question: '"Only the dead have seen the end of the war."',
				options:['Sun Tzu', 'Barack Obama', 'Tacitus', 'Plato'],
				correct: 3,
				},
			{
				name: 9,
				question: '"The gods favour the bold."',
				options:['Ovid', 'Pulibius Syrus', 'Sun Tzu', 'Aeschylus'],
				correct: 0,
				},
			{
				name: 10,
				question: '"The wise man speaks because he has something to say, the fool because he has to say something."',
				options:['Tacitus', 'Aristotle', 'Serius', 'Vegetius'],
				correct: 1,
				},
			{
				name: 11,
				question: '"It is a bad plan that cannot be altered."',
				options:['Tacitus', 'Aristotle', 'Pulibius Syrus', 'Vegetius'],
				correct: 2,
				},
			{
				question: 'GAME OVER!!!',	
				options:['Game', 'Over', 'Good', 'Job'],
				}

			];
			console.log(quotes.length);
			right = quotes[qCount].correct;

			function mainQuest(){
			right = quotes[qCount].correct;
			$('#questions').text(quotes[qCount].question);
			$('#answer0').text(quotes[qCount].options[0]);
			$('#answer1').text(quotes[qCount].options[1]);
			$('#answer2').text(quotes[qCount].options[2]);
			$('#answer3').text(quotes[qCount].options[3]);

			}

			mainQuest();
			// next Button.
			$('#button-1').click(function(){
				
				qCount++;
				
				mainQuest();

			})

			function nextQuest(){
				qCount++;
				
				mainQuest();
			}
			// buttons
			$('#answer0').click(function(){
				
				if($("#answer0").val() == right){
					console.log(right);
					correctChoice ++;					
					$('#correct').html(correctChoice);
					nextQuest();
					
				}

				else {
					
					wrongChoice ++;
					$('#wrongAnswer').html(wrongChoice);
					nextQuest();
					

				}

			})

			$('#answer1').click(function(){
				console.log(right);
				if($("#answer1").val() == right){
					
					correctChoice++;
					$('#correct').html(correctChoice);
					nextQuest();
				}
				else{
					
					wrongChoice++;
					$('#wrongAnswer').html(wrongChoice);
					nextQuest();
				}

			})

			$('#answer2').click(function(){
				console.log(right);
				if($("#answer2").val() == right){
					
					correctChoice++;
					$('#correct').html(correctChoice);
					nextQuest();
				}
				else {
					
					wrongChoice++;
					$('#wrongAnswer').html(wrongChoice);
					nextQuest();
				}

			})

			$('#answer3').click(function(){
				console.log(right);
				if($("#answer3").val() == right){
					
					correctChoice++
					$('#correct').html(correctChoice);
					nextQuest();
				}
				else{
					 
					wrongChoice++;
					$('#wrongAnswer').html(wrongChoice);
					nextQuest();
				}
				console.log(qCount);
			})

