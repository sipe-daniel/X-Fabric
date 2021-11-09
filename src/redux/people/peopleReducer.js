const INITIAL_STATE = {
    people: []
}

function personReducer( state = INITIAL_STATE, action)
{
    switch(action.type){
        case "ADDPERSON":
            const newArr = [...state.people];
            newArr.unshift(action.payload)
            return {
                people: newArr
            }
        case "DROPPEOPLE": {
            return {
                people: action.payload
            }
        }
        default:;
    }
    return state;
}

export default personReducer;

