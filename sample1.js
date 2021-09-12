
$(document).ready(function () {
  
	// FETCHING DATA FROM JSON FILE
	var x = document.getElementById("t1");
	x.style.display="block";
	$.getJSON("gfgdetails.json", 
			function (data) {
		var student = '';

		// ITERATING THROUGH OBJECTS
		$.each(data, function (key, value) {

			//CONSTRUCTION OF ROWS HAVING
			// DATA FROM JSON OBJECT
			student += '<tr>';
			student += '<td>' + 
				value.slno + '</td>';

			student += '<td>' + 
				value.pname + '</td>';

			student += '<td>' + 
				value.quantity + '</td>';

				student += '<td>' + 
				value.dept + '</td>';

				student += '<td>' + 
				value.notes + '</td>';

			student += '<td>' + 
				value.unit + '</td>';

				

			student += '</tr>';
		});
		  
		//INSERTING ROWS INTO TABLE 
		$('#table').append(student);
	});
});

