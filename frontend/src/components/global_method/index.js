
const handleDate = (value) => {
    const formatter = new Intl.DateTimeFormat('en-us', { 
        month: 'short'
    });
    let object = {
        startDate: null,
        endDate: null,
    }
    if(value.start_date !== undefined) {
        let date = new Date(value.start_date)
        let month = formatter.format(date)
        object.startDate = `${date.getFullYear()}, ${month}`
    }
    if(value.end_date !== undefined) {
        let date = new Date(value.end_date)
        let month = formatter.format(date)
        object.endDate = `${date.getFullYear()}, ${month}`

    }else {
        object.endDate = 'Present'
    }

    return object
}

export default handleDate