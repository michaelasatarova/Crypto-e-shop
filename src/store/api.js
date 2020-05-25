
import axios from "axios";

export async function products(){
    return new Promise((resolve, reject) => {
        axios
        .get('https://rest.coinapi.io/v1/exchanges')
        .then(response => resolve(response.data))
        .catch(error => reject(error));
    });
}



