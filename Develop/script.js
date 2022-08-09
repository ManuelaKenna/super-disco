//time rows
$(document).ready(function(){
    for (let index = 9; index < 19; index++) {
        var color = ""
        var momentTime = moment().hours()
        if (momentTime > index) {
            color = "past"
        } else if (momentTime === index) {
            color = "present"
        } else {
            color = "future"
        }
        var rowDiv = $("<div>").addClass("row time-block").attr("id", index)
        var hourDiv = $("<div>").addClass("col-2 hour").text(index)
        var textArea = $("<textarea>").addClass("col-8 description " + color).val(localStorage.getItem(index))
        var button = $("<button>").addClass("col-2 saveBtn").attr("id", index).text("Save").click(function(){
            var hourKey = $(this).attr("id")
            var activity = $(this).siblings(".description").val()
            localStorage.setItem(hourKey , activity)
        })
        $(".container").append(rowDiv.append(hourDiv , textArea , button))

    }
})

//moment.now top of the page
//icon for save

