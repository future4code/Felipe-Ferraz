const initialState = {
    data: null
}

const tripsList = (state = initialState, action) =>{
    switch (action.type){
        case  'SET_TRIPS':
            return {...state, data:action.payload}
        default:{
            return state
        }
    }
   
}

export default tripsList;