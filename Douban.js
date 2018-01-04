const API_KEY = "0b2bdeda43b5688921839c8ecb20399b";
const API_STEM = "https://api.douban.com/v2/movie/in_theaters";

function fetchBooks(city, start, count) {
    let url = `${API_STEM}/?apikey=${API_KEY}&city=${city}&start=${start}&count=${count}`;
    return fetch(url)
        .then(response => response.json())
        .then(responseJson => {
            return responseJson.subjects;
        })
        .catch(error => {
            console.error(error);
        });
}

export default {fetchBooks: fetchBooks};
