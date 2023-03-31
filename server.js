/* Created and coded by Abhilash Narayan */
/* Quiz source: w3schools.com */

var quiz = { "JS" : [
	{
		"id" : 1,
		"question" : "Why is serverless computing associated with the NoOps concept?",
		"options" : [
			{"a": "Serverless computing eliminates servers of all types", 
			 "b":"Serverless computing requires operations teams to be involved as much as developers", 
			 "c":"Serverless computing removes server management obligations", 
			 "d":"Serverless computing is not associated with NoOps"}
			],
		"answer":"Serverless computing removes server management obligations",
		"score":0,
		"status": ""
	},
	{
		"id" : 2,
		"question" : "What do you mean by cloud computing? Select the best answer.",
		"options" : [
			{"a": "A term referring to storing data over the internet.", 
			 "b":"A platform where you can access huge amounts of data without having a hard disk.", 
			 "c":"A platform where you can access the data from a remote server.",
                   "d":"All of the above."}
			],
		"answer":"All of the above.",
		"score":0,
		"status": ""
	},
	{
		"id" : 3,
		"question" : "Cloud computing offers how many service models?",
		"options" : [
			{"a": "3", 
			 "b":"4", 
			 "c":"2",
                   "d":"5"}
			],
		"answer":"3",
		"score":0,
		"status": ""
	},
	{
		"id" : 4,
		"question" : "Which of these traits is a benefit of a serverless architecture?",
		"options" : [
			{"a": "Reduced cost because you only pay when your code runs", 
			 "b":"Improved scalability that enables you to serve extremely active traffic periods", 
			 "c":"Faster workflows for IT departments due to less worry about server obligations",
                   "d":"All of the above"}
			],
		"answer":"All of the above",
		"score":0,
		"status": ""
	},
	{
		"id" : 5,
		"question" : "What best describes the payment structure of most serverless cloud providers?",
		"options" : [
			{"a": "Pay per use", 
			 "b":"One-time flat service fee",
			 "c":"Multi-tiered monthly service subscription plans",
			 "d":"Fixed hourly rate"}
			],
		"answer":"Pay per use",
		"score":0,
		"status": ""
	},
	{
		"id" : 6,
		"question" : "When does the serverless model provide the most economic benefit?",
		"options" : [
			{"a": "When event loads are consistent", 
			 "b":"When event loads are inconsistent",
			 "c":"When the application is used internally and not externally",
                   "d":"It is not economically beneficial to use serverless"}
			],
		"answer":"When event loads are inconsistent",
		"score":0,
		"status": ""
	},
	{
		"id" : 7,
		"question" : "Serverless is a good choice for an application in which of these cases?",
		"options" : [
			{"a": "When the app's event processing is resource-intensive", 
			 "b":"When you have an app that is consistently bombarded with events",
			 "c":"When the app's event processing is not resource-intensive",
                   "d":"All of the above"}
			],
		"answer":"When the app's event processing is not resource-intensive",
		"score":0,
		"status": ""
	},
	{
		"id" : 8,
		"question" : "Which of the following automation services is NOT a serverless platform provider?",
		"options" : [
			{"a": "AWS Lambda", 
			 "b":"Client-Server architecture.",
			 "c":"Microsoft Azure Functions",
			 "d":"None of the above",
			}
			],
		"answer":"None of the above",
		"score":0,
		"status": ""
	},
	{
		"id" : 9,
		"question" : "What are the advantages of Auto Scaling?",
		"options" : [
			{"a": "Fault Tolerance", 
			 "b":"Better Availability",
			 "c":"Better Cost Management",
			 "d":"All of the above"
			}
			],
		"answer":"All of the above",
		"score":0,
		"status": ""
	},
	{
		"id" : 10,
		"question" : "Which of the following is a good use case for serverless computing?",
		"options" : [
			{"a": "Microservices", 
			 "b":"Event processing",
			 "c":"NoOps applications",
			 "d":"All of the above"
			}
			],
		"answer":"All of the above",
		"score":0,
		"status": ""
	}
	
	]
}



var quizApp = function() {

	this.score = 0;		
	this.qno = 1;
	this.currentque = 0;
	var totalque = quiz.JS.length;

	
	this.displayQuiz = function(cque) {
		this.currentque = cque;
		if(this.currentque <  totalque) {
			$("#tque").html(totalque);
			$("#previous").attr("disabled", false);
			$("#next").attr("disabled", false);
			$("#qid").html(quiz.JS[this.currentque].id + '.');
	
			
			$("#question").html(quiz.JS[this.currentque].question);	
			 $("#question-options").html("");
			for (var key in quiz.JS[this.currentque].options[0]) {
			  if (quiz.JS[this.currentque].options[0].hasOwnProperty(key)) {
		
				$("#question-options").append(
					"<div class='form-check option-block'>" +
					"<label class='form-check-label'>" +
							  "<input type='radio' class='form-check-input' name='option'   id='q"+key+"' value='" + quiz.JS[this.currentque].options[0][key] + "'><span id='optionval'>" +
								  quiz.JS[this.currentque].options[0][key] +
							 "</span></label>"
				);
			  }
			}
		}
		if(this.currentque <= 0) {
			$("#previous").attr("disabled", true);	
		}
		if(this.currentque >= totalque) {
				$('#next').attr('disabled', true);
				for(var i = 0; i < totalque; i++) {
					this.score = this.score + quiz.JS[i].score;
				}
			return this.showResult(this.score);	
		}
	}
	
	this.showResult = function(scr) {
		$("#result").addClass('result');
		$("#result").html("<h1 class='res-header'>Total Score: &nbsp;" + scr  + '/' + totalque + "</h1>");
		for(var j = 0; j < totalque; j++) {
			var res;
			if(quiz.JS[j].score == 0) {
					res = '<span class="wrong">' + quiz.JS[j].score + '</span><i class="fa fa-remove c-wrong"></i>';
			} else {
				res = '<span class="correct">' + quiz.JS[j].score + '</span><i class="fa fa-check c-correct"></i>';
			}
			$("#result").append(
			'<div class="result-question"><span>Q ' + quiz.JS[j].id + '</span> &nbsp;' + quiz.JS[j].question + '</div>' +
			'<div><b>Correct answer:</b> &nbsp;' + quiz.JS[j].answer + '</div>' +
			'<div class="last-row"><b>Score:</b> &nbsp;' + res +
			
			'</div>' 
			
			);
			
		}
	}
	
	this.checkAnswer = function(option) {
		var answer = quiz.JS[this.currentque].answer;
		option = option.replace(/\</g,"&lt;")   //for <
		option = option.replace(/\>/g,"&gt;")   //for >
		option = option.replace(/"/g, "&quot;")

		if(option ==  quiz.JS[this.currentque].answer) {
			if(quiz.JS[this.currentque].score == "") {
				quiz.JS[this.currentque].score = 1;
				quiz.JS[this.currentque].status = "correct";
		}
		} else {
			quiz.JS[this.currentque].status = "wrong";
		}
		
	}	
	 
	this.changeQuestion = function(cque) {
			this.currentque = this.currentque + cque;
			this.displayQuiz(this.currentque);	
			
	}
	
}


var jsq = new quizApp();

var selectedopt;
	$(document).ready(function() {
			jsq.displayQuiz(0);		
		
	$('#question-options').on('change', 'input[type=radio][name=option]', function(e) {

			//var radio = $(this).find('input:radio');
			$(this).prop("checked", true);
				selectedopt = $(this).val();
		});
		
			
			 
	});

	
	
	
	$('#next').click(function(e) {
			e.preventDefault();
			if(selectedopt) {
				jsq.checkAnswer(selectedopt);
			}
			jsq.changeQuestion(1);
	});	
	
	$('#previous').click(function(e) {
		e.preventDefault();
		if(selectedopt) {
			jsq.checkAnswer(selectedopt);
		}
			jsq.changeQuestion(-1);
	});	



