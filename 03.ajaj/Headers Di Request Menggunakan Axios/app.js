// Menambahkan Data Headers Di Request Menggunakan Axios
const jokes = document.querySelector('#jokes')
const button = document.querySelector('button')

const addJoke = async () => {
    const jokeText = await getJoke()
    const liNew = document.createElement('li')
    liNew.append(jokeText)
    jokes.append(liNew)
}

const getJoke = async () => {

    const config = {
        headers : {
            Accept:'application/json',
        },
    };
 
        const res = await axios.get('https://icanhazdadjoke.com/', config);
        return res.data.joke;
}

button.addEventListener('click',addJoke);