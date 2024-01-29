import journalApi from "@/api/journalApi";

/* export const myActions = async ({commit})=>{

}
Receive the context like an argument and the desestructure to obtain the commit
**/
export const loadEntries = async ({commit}) => {
  const {data}  = await journalApi.get("/Entries.json");
  if(!data ){
    commit('setEntries',[])
    return
  }
  const entries = []
  for(let id of Object.keys(data)){
    entries.push({
        id,
        ...data[id]
    })
    
  }
  commit('setEntries', entries)
};

export const updateEntry = async ({commit},entry) => {
    const{date, picture,text}= entry
await journalApi.put(`Entries/${entry.id}.json`,{
    date,
    picture,
    text
})

commit('updateEntry',{...entry})


};
export const createEntry = async ({commit},entry) => {
  const{date, picture,text}= entry
const {data} = await journalApi.post(`Entries.json`,{
  date,
  picture,
  text
})


  commit('addEntry',{...entry, id:data.name})

  return data.name
};
export const deleteEntry = async ({commit},id)=>{
  await journalApi.delete(`Entries/${ id }.json`)
  commit('deleteEntry',id)
}