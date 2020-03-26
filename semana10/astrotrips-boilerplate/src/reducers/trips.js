const initialState = {
    trips: []
}

const tripsList = (state = initialState, action) =>{
    switch (action.type){
        case  'SET_TRIPS':
            return {...state, trips:action.payload.data}
        default:{
            return state
        }
    }
   
}

export default tripsList;