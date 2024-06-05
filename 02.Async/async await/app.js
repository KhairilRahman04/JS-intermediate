

const changeDelay = function (color,delay) {
    return new Promise ((resolve,reject) => {
        setTimeout (() => {
            document.body.style.backgroundColor = color;
            resolve();
        },delay)
    });
}

async function ChangeColor (){
    await changeDelay('red',1000);
    await changeDelay('green',1000);
    await changeDelay('blue',1000);
    await changeDelay('',1000);
    return"All Done!!";
};

ChangeColor().then((res)=>{
    alert(res)
})