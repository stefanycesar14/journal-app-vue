 /**
 * export const myMutation = (state)=>{

}
*/

export const setEntries = (state, entries)=>{
    state.entries = [...state.entries, ...entries];
    state.isLoading = false

}
export const updateEntry = (state,entry)=>{

const indx= state.entries.map(e=>e.id).indexOf(entry.id)
state.entries[indx]=entry



}
export const addEntry = (state,entry)=>{
console.log(entry);
     state.entries=[entry,...state.entries]
}

export const deleteEntry = (state,id)=>{
state.entries = state.entries.filter(entry => entry.id !=id)
}
export const clearEntries = (state)=>{
    state.entries = []
    }