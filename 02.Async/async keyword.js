
const hello = async () => {
    return ("hello world");//jika berhasil
    //throw 'gagal' -> //jika gagal
}

hello()
.then((res) => {//then jika berhasil
    console.log('respone:',res)
})

// .catch(()=>{
    //catch jika gagal
// })