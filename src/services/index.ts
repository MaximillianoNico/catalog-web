import Axios from 'axios';

const Instance = Axios.create({
  baseURL: "https://my-json-server.typicode.com/MaximillianoNico"
})

export default Instance;