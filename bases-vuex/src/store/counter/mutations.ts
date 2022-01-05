export const increment = ( state: any ) => {
    state.count++;
    state.lastMutation = 'increment';
};

export const incrementBy = ( state: any, val: any ) => {
    state.count += val;
    state.lastMutation = 'incrementBy';
};

export const setLoading = ( state: any, val: any ) => {
    state.isLoading    = val;
    state.lastMutation = 'setLoading';
};
