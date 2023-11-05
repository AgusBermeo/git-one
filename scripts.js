function returnDay(day) {
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    for (let i = 0; i <= days.length; i++) {
        if (day < 1 || day > 7 ) {
            return null;
        } else {
            return days[day-1];
        }
    }
}
