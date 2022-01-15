export interface CounterState{
    counter:number,
    channelName:string,
};
export const counterInitialState:CounterState={
    counter:0,
    channelName:'my channel name'
};