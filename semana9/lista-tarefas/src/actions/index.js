export const addTaskList = text => {
    console.log(text)
    return {
        type: "ADD_TASK",
        payload: {
            text: text
        }
    }
}

export const rmTaskList = task => {
    return {
        type: "RM_TASK",
        payload: {
            task: task
        }
    }
}