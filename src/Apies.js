export const apiKeys={
	Apixu:"de3a63dbc0c34befb19121950192903"
}



// axios.get(`https://geocoder.api.here.com/6.2/geocode.json?searchtext=${this.state.clientLocation}&app_id=${apiKeys.geocode.app_id}&app_code=${apiKeys.geocode.app_code}`)
//       .then(function (response) {
//         let Latitude = response.data.Response.View[0].Result[0].Location.DisplayPosition.Latitude;
//         let Longitude = response.data.Response.View[0].Result[0].Location.DisplayPosition.Longitude;

//         console.log(Latitude,Longitude);


// axios.get(`https://api.darksky.net/forecast/${apiKeys.darkSky}/${Latitude},${Longitude}`)
//         .then(function(response){
//           console.log(response)
//         })
//         .catch(function(error){
//           console.log("ErrorForecast",error)
//         })



//         