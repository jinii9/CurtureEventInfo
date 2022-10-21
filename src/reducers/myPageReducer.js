const initialState = {
    info:[{
        GUNAME:"",
        CODENAME: "",
        DATE: "",
        TITLE: "",
        MAIN_IMG: "",
    }]
};

export const BasketAction = (data) => {
    return {
        type: "BASKET",
        data: data,
    };
};

const BasketReducer = (state = initialState, action) => {
    switch (action.type) {
        case "BASKET": {
            return {
                    ...state,
                    info: state.info.concat({
                        GUNAME: action.data.GUNAME,
                        CODENAME: action.data.CODENAME,
                        DATE: action.data.DATE,
                        TITLE: action.data.TITLE,
                        MAIN_IMG: action.data.MAIN_IMG,
                    })
                }
        }
        default: {
            return state;
        }
    }
};

export default BasketReducer;