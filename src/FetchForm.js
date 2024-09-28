import axios from 'axios';

const getAllForm = () => {
    axios.get("http://localhost:8000")
    .then(({data}) => {console.log(data)
    })
}
const addForm = () => {
    axios.post('http://localhost:8000/saveForm')
    .then((data) => {
        console.log(data);
        getAllForm()
    })
}
 export { getAllForm, addForm }