let loc=$("location");
let temp=$("temp-icon");
let tempvalue=$("temp-value");
let climate=$("climate");
let iconfile;
const searchInput=$("search-input");
const searchButton=$("btn");




window.addEventListener("load", ()=>{
    
    let longi;
    let lat;  //For latitute and longitude
   
    if(navigator.geolocation)
    {
        //Taking the current longi and latitude 
        navigator.geolocation.getCurrentPosition((position)=>
        {
          
            longi=position.coords.longitude;
            lat=position.coords.latitude;
            //it will create local server in our file  
            const proxy="https://cors-anywhere.herokuapp.com/";

            const api=`${proxy}api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${longi}&appid=dae7ddefac3881287080e59935b80ad0`;
            
            //Fetch - fetches the data from api and it will return as json file 
            fetch(api).then((response)=>
            {
                return response.json();
            })
            .then(data=>
                {
                    const{name}=data;
                    const{feels_like}=data.main;
                    const{id,main}=data.weather[0];

                    loc.textContent=name;
                    climate.textContent=main;
                    tempvalue.textContent=Math.round(feels_like-273);  //It gives the temp in Kelvin so -273 for Celsius 
                    
                    if(id<300 && id>200)
                    {
                        tempicon.src="./icons/thuderstorm.png";
                    }
                    else if(id<400 && id>300)
                    {
                        tempicon.src="./icons/cloud.png";
                    }
                    else if(id<600 && id>500)
                    {
                        tempicon.src="./icons/rain.png";
                    }
                    else if(id<700 && id>600)
                    {
                        tempicon.src="./icons/snow.png";
                    }
                    else if(id<800 && id>700)
                    {
                        tempicon.src="./icons/cloud.png";
                    }
                    else if(id==800)
                    {
                        tempicon.src="./icon/weathericon.png";
                    }
                    
                })
        }
        )}
    

})