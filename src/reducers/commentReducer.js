const commentReducer = (state = {
  content: "initial comment content"
}, action) => {
    switch (action.type) {
        case 'SET_PLACEHOLDER':
        state = {
            ...state,
            content: action.payload
        }
    }
    // Remember to always return the state!
    return state;
    // ************************************
}

export default commentReducer;