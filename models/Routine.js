export class Routine{
    constructor(routineName, startTime, activities){
        this.routineName = routineName
        this.activities = activities
        this.startTime = startTime
        this.durationTime = 0
        this.activities.forEach(activity => {
            this.durationTime += activity.durationTime
        });
    }
}
export class Activity{
    constructor(activityName, durationTime){
        this.activityName = activityName
        this.durationTime = durationTime
    }
}