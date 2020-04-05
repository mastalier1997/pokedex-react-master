import Fetch from 'whatwg-fetch';
import data from "../data/pokemon.json";

export function get(url) {
    return fetch(url)
        .then((response) => {
            return response.json();
        });
}

export function json() {
    return new Promise(function (resolve, reject) {
        resolve(data);
    });
}
