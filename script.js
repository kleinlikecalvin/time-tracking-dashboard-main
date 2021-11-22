const yesterdayString = "Yesterday - ";
const lastWeekString = "Last Week - ";
const lastMonthString = "Last Month - ";

document.getElementById("dailyBtn").addEventListener("click", function() {
    //Work
    document.getElementById("currentWorkHours").innerHTML = "32hrs";
    document.getElementById("previousWorkHours").innerHTML = yesterdayString + "36hrs";
    //Play
    document.getElementById("currentPlayHours").innerHTML = "1hr";
    document.getElementById("previousPlayHours").innerHTML = yesterdayString + "2hrs";
    //Study
    document.getElementById("currentStudyHours").innerHTML = "0hrs";
    document.getElementById("previousStudyHours").innerHTML = yesterdayString + "1hr";
    //Exercise
    document.getElementById("currentExerciseHours").innerHTML = "1hr";
    document.getElementById("previousExerciseHours").innerHTML = yesterdayString + "1hr";
    //Social
    document.getElementById("currentSocialHours").innerHTML = "1hr";
    document.getElementById("previousSocialHours").innerHTML = yesterdayString + "3hrs";
    //Self Care
    document.getElementById("currentSelfCareHours").innerHTML = "0hrs";
    document.getElementById("previousSelfCareHours").innerHTML = yesterdayString + "1hr";

});//end anon function and dailyBtn click event

document.getElementById("weeklyBtn").addEventListener("click", function() {
    //Work
    document.getElementById("currentWorkHours").innerHTML = "5hrs";
    document.getElementById("previousWorkHours").innerHTML = lastWeekString + "7hrs";
    //Play
    document.getElementById("currentPlayHours").innerHTML = "10hrs";
    document.getElementById("previousPlayHours").innerHTML = lastWeekString + "8hrs";
    //Study
    document.getElementById("currentStudyHours").innerHTML = "4hrs";
    document.getElementById("previousStudyHours").innerHTML = lastWeekString + "7hrs";
    //Exercise
    document.getElementById("currentExerciseHours").innerHTML = "4hrs";
    document.getElementById("previousExerciseHours").innerHTML = lastWeekString + "5hrs";
    //Social
    document.getElementById("currentSocialHours").innerHTML = "5hrs";
    document.getElementById("previousSocialHours").innerHTML = lastWeekString + "10hrs";
    //Self Care
    document.getElementById("currentSelfCareHours").innerHTML = "2hrs";
    document.getElementById("previousSelfCareHours").innerHTML = lastWeekString + "2hrs";

});//end anon function and weeklyBtn click event

document.getElementById("monthlyBtn").addEventListener("click", function() {
    //Work
    document.getElementById("currentWorkHours").innerHTML = "103hrs";
    document.getElementById("previousWorkHours").innerHTML = lastMonthString + "128hrs";
    //Play
    document.getElementById("currentPlayHours").innerHTML = "23hrs";
    document.getElementById("previousPlayHours").innerHTML = lastMonthString + "29hrs";
    //Study
    document.getElementById("currentStudyHours").innerHTML = "13hrs";
    document.getElementById("previousStudyHours").innerHTML = lastMonthString + "19hrs";
    //Exercise
    document.getElementById("currentExerciseHours").innerHTML = "11hrs";
    document.getElementById("previousExerciseHours").innerHTML = lastMonthString + "18hrs";
    //Social
    document.getElementById("currentSocialHours").innerHTML = "21hrs";
    document.getElementById("previousSocialHours").innerHTML = lastMonthString + "23hrs";
    //Self Care
    document.getElementById("currentSelfCareHours").innerHTML = "7hrs";
    document.getElementById("previousSelfCareHours").innerHTML = lastMonthString + "11hrs";

});//end anon function and monthlyBtn click event