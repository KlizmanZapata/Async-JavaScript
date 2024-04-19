import fetch from "node-fetch";
const API = "https://api.escuelajs.co/api/v1";

function postData(urlApi,data) {
    const response = fetch(urlApi, {
        method: 'POST',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response;
}

const data = {
    "title": "7000",
    "price": 7000,
    "description": "A description",
    "images": ["https://placeimg.com/640/480/any"],
    "categoryId": 1,
    "name": "Clothes",
    "image": "https://api.lorem.space/image/fashion?w=640&h=480&r=4278"
    }
    //"id": 210

postData(`${API}/products`, data)
    .then((response) => (response.json()))
    .then((data) => console.log(data));