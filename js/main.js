var menuArray = [
    {label: "Week 01 Submission", url:"works/week01/week01.html"},
    {label: "Week 02 Submission", url:"works/week02/week02.html"},
	{label: "Week 03 Submission", url:"works/week03/week03.html"},
	{label: "Week 04 Submission", url:"works/week04/week04.html"},
	{label: "Week 05 Submission", url:"works/week05/week05.html"},
    {label: "Week 06 Submission", url:"works/week06/week06.html"},
	{label: "Week 07 Submission", url:"works/week07/week07.html"},
	{label: "Week 08 Submission", url:"works/week08/week08.html"},
    {label: "Week 09 Submission", url:"works/week09/week09.html"},
    {label: "Week 10 Submission", url:"works/week10/week10.html"},
	{label: "Week 11 Submission", url:"works/week11/week11.html"},
	{label: "Week 14 Final", url:"works/week14/exercises/money.html"}
]

function dynamicTableLoader() {
    var display = "";
    var i;
    // FOR loop to loop through array and display the content in a <li> tag
    for (i in menuArray) {
        display += "<li><a href=\"" + menuArray[i].url + "\">" + menuArray[i].label + "</a></li>";
    }
        document.getElementById("courselink").innerHTML = display;
}
