// Your code here
function createEmployeeRecord(arr){
    const object = {
        firstName: arr[0],
        familyName: arr[1],
        title: arr[2],
        payPerHour: arr[3],
        timeInEvents: [],
        timeOutEvents: [],
    }
    return object
}

function createEmployeeRecords(arr){
    return arr.map(employee => createEmployeeRecord(employee))
    
    let newArray = []
    debugger
    arr.forEach(employee => {
        let record = createEmployeeRecord(employee)
        newArray = [...newArray,record]
    })
    return newArray
}

function createTimeInEvent(obj,date){
    obj.timeInEvents.push({
        type: 'TimeIn',
        hour: +date.slice(11,15),
        date: date.slice(0,10)
    })
  
    return obj
}

function createTimeOutEvent(obj,date){
    obj.timeOutEvents.push({
        type: 'TimeOut',
        hour: +date.slice(11,15),
        date: date.slice(0,10)
    })
  
    return obj
}

function hoursWorkedOnDate(obj,date){

    for(let i = 0; i<obj.timeOutEvents.length; i++){
        if(date === obj.timeOutEvents[i].date){
            let hours = obj.timeOutEvents[i].hour - obj.timeInEvents[i].hour
            hours = hours/100
            return hours
        }
    }

    
}

function wagesEarnedOnDate(obj,date){
    let hours = hoursWorkedOnDate(obj,date)
    let wages = hours * obj.payPerHour
    return wages
}

function allWagesFor(obj){
    let numDays = obj.timeOutEvents
    let totalWages = 0
    numDays.forEach(day => {
        let wages = wagesEarnedOnDate(obj,day.date)
        totalWages += wages
    })
    return totalWages
}

function calculatePayroll(arr){
    // debugger
    // let payroll = arr.reduce((prev,current) => allWagesFor(arr[prev]) + allWagesFor(arr[current]),0)
    // debugger
    // return payroll

    let payroll = 0
    //debugger
    for(let i = 0; i < arr.length; i++){
        payroll += allWagesFor(arr[i])
    }
    return payroll
}

