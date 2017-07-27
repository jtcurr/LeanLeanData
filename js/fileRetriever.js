var csvData = null;
function csvFileGetter(path) {
		var path = $('.csv-input').val()
		$.ajax({
			type: "GET",
			url: path,
			dataType: "text",
			success: function(data) {
				csvData = $.csv.toObjects(data);
				dataReceiver(csvData);
			}
		});
}

