const initialState = {
    trips: [],
    tripDetail: []
}

const tripsList = (state = initialState, action) =>{
    switch (action.type){
        case  'SET_TRIPS':
            return {...state, trips:action.payload.data}
        case 'SET_TRIP_DETAIL':
            return{...state, tripDetail: action.payload.data}
        default:{
            return state
        }
    }
   
}

export default tripsList;