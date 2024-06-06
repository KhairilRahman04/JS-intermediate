//Request Dengan Library Axios

const req = async (id) => {
    try{
        const res = await axios.get(`https://swapi.dev/api/people/${id}`);
        console.log(res.data);
    }
    catch (err){
        console.log(err);
        console.log(err.code);
        alert(err.message);
    };
};

req(1);
req(2);
req(9999);//error