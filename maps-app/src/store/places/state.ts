export interface IPlacesState {
    isLoading: boolean;
    userLocation?: [ number, number ];
}

function state(): IPlacesState {
    return {
        isLoading: true
    };
}

export default state();
