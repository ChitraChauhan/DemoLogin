import { userConstants } from '.././actions/userConstants';

export function users(state = {}, action) {
    switch (action.type) {
        case userConstants.GETALL_REQUEST:
            return {
                loading: true
            };
        case userConstants.GETALL_SUCCESS:
            return {
                items: action.users
            };
        case userConstants.GETALL_FAILURE:
            return {
                error: action.error
            };
        case userConstants.GETBYID_REQUEST:
            return {
                ...state,
                items: state.items.map(user =>
                    user._id === action._id
                        ? { ...user, loading: true}
                        : user
                )
            };
        case userConstants.GETBYID_SUCCESS:
            return {
                    items: state.items.filter(user => user._id !== action._id)
            };
        case userConstants.GETBYID_FAILURE:
            return {
                ...state,
                items: state.items.map(user => {
                    if (user._id === action._id) {
                        const { loading } = user;
                        return { error: action.error };
                    }
                    return user;
                })
            };
        default:
            return state
    }
}