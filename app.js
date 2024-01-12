const input=document.querySelector('input')
const olTag=document.querySelector('ol')

const Url='https://api.openweathermap.org/data/2.5/weather?q='    


const url='f631ea87daddf959f8d7a12c30009e4c'
const imgUrl='https://openweathermap.org/img/wn/'

async function getShum(name){

    const res=await fetch(Url+name+'&appid='+url)
    const data= await  res.json()
    console.log(data);
    renderInfo(data)
    
   
} 
function renderInfo(obj){
    olTag.innerHTML=''
    olTag.innerHTML+=`
    <h1>${obj.name}</h1>
    <h2>${Math.floor(obj.main.temp-273.15)} 'C</h2>
    <p>${obj.weather[0].main}</p>
    <img src='${imgUrl+obj.weather[0].icon}@2x.png' />

    `
    if(obj.weather[0].main==='Snow'){
        document.body.style.backgroundImage= "url(https://cdn5.pravdasevera.ru/620f37f6ccf39cf1ff6f8012/620f382810044_1102x826.jpg)";

    }else if(obj.weather[0].main==='Clear'){
        document.body.style.backgroundImage="url(https://cardinalwxservice.com/wp-content/uploads/2022/03/blue-sky-1330598792xLu.jpg)";
    }else if(obj.weather[0].main==='Rain'){
        document.body.style.backgroundImage="url(https://avatars.mds.yandex.net/i?id=cab4fb3835449354f90bed3e3335c05a919b3bf4-10608704-images-thumbs&n=13)";
    }else if(obj.weather[0].main==='Smoke'){
        document.body.style.backgroundImage="url(https://avatars.mds.yandex.net/i?id=a91ce35a27d605c0e4520014064bf330aaa94d43-10805306-images-thumbs&n=13)"
    }else if(obj.weather[0].main==='Haze'){
        document.body.style.backgroundImage="url(https://avatars.mds.yandex.net/i?id=9d564d35cd61b2d4c91d92c4dc112e1ac29dfd72-8199736-images-thumbs&n=13)"
}else if(obj.weather[0].main==='Thunderstorm'){
    document.body.style.backgroundImage="url(https://avatars.mds.yandex.net/i?id=6b7c671490e1a9778756f29c08eac575f519fa41-10836596-images-thumbs&n=13)"
}else if(obj.weather[0].main==='Clouds'){
    document.body.style.backgroundImage="url(https://avatars.mds.yandex.net/i?id=8028ce8f09249e2cc686545c55e0f63be9277fb8-10511855-images-thumbs&n=13)"
}else if(obj.weather[0].main==='Mist'){
    document.body.style.backgroundImage="url(https://avatars.mds.yandex.net/i?id=b0b7b5c871d90c7547648576a5ea09337acbba80-8341432-images-thumbs&n=13)"
}

}

input.onchange=()=>{
    getShum(input.value)
}
