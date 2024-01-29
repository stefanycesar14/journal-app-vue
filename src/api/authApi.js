import axios from "axios";
const authApi = axios.create({
  baseURL: "https://identitytoolkit.googleapis.com/v1/accounts",
  params: {
    key: "AIzaSyCda0SvsC0HXL9ycB64yUGg1GPBdOMaPa8",
  },
});
export default authApi;
