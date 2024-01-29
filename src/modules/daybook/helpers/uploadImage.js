import cloudinaryApi from "@/api/cloudinaryApi"

const uploadImage = async (file) =>{
if(!file)return
try{
const form = new FormData()
form.append('upload_preset','curso-vue')
form.append('file',file)
const {data} = await cloudinaryApi.post('',form)

return data.secure_url
}
catch(error){
    console.error('error al cargar imagen')
console.log(error);
return null
}


}
export default uploadImage