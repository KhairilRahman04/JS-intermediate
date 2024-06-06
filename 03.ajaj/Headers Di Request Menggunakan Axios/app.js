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
    try {
        const config = {
            headers : {
                Accept:'application/json',
            },
        };
     
            const res = await axios.get('https://icanhazdadjoke.com/', config);
            return res.data.joke;
            
    } catch (error) {
        return 'jokes not available'
    }

}

button.addEventListener('click',addJoke);