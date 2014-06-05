// This allows the Javascript code inside this block to only run when the page
// has finished loading in the browser.
$(function() {
    var lang_to		= "English";
    var lang_from		= "Spanish";
    var current_dict	= dicts[lang_to][lang_from]; // keys: words in @lang_to, values: corresponding words in @lang_from 	
    // Your code here
    keyArray = [];
    for (var key in current_dict)
	keyArray.push(key);
    var answer = keyArray[Math.floor(Math.random()*keyArray.length)];
    var challenge = current_dict[answer];
    $("#challenge").html(challenge);
    $("button").click(function () {
	var translation = document.getElementById("translation").value;
	document.getElementById("translation").value = "";
	var right = 0;
	if (answer == translation) {
	    right = 1;
	} else {
	    right = 0;
	}
	var c2 = document.getElementById("c1").innerHTML;
	var t2 = document.getElementById("t1").innerHTML;
	var check2 = document.getElementById("check1").innerHTML;
	if (right == 1) {
	    $("#c1").html(challenge);
	    $("#t1").html(translation);
	    $("#check1").html("<span class=\"ui-icon ui-icon-check\"></span>");
	} else {
	    $("#c1").html(challenge);
	    $("#t1").html("<del>"+translation+"</del>");
	    $("#check1").html(answer);
	}
	$("#c2").html(c2);
	$("#t2").html(t2);
	$("#check2").html(check2);
	answer = keyArray[Math.floor(Math.random()*keyArray.length)];
	challenge = current_dict[answer];
	$("#challenge").html(challenge);
    });

});


// Now the two will work

