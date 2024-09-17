
import axios from "axios";
const tasksApi=axios.create({
    baseURL:'http://localhost:4001/tasks',
})

export default tasksApi