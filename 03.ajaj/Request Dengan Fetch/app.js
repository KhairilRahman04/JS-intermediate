//membuat request menggunakan fetch dengan sangat mudah

const req = async () => {
    try{
        const data1 = await fetch('https://swapi.dev/api/people/1/')
        const datajson1 = await data1.json()
        console.log(datajson1)
        const data2 = await fetch('https://swapi.dev/api/people/2/')
        const datajson2 = await data2.json()
        console.log(datajson2)
    }
    catch(err){
        console.log('error',err)
    }
}
req()