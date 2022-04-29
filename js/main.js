//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)
document.querySelector('#select').addEventListener('click', select )

const img = document.querySelector('#img')
const iframe = document.querySelector('#iframe')


function getFetch(){
  const choice = document.querySelector('input').value
  console.log(choice)

  const url = `https://api.nasa.gov/planetary/apod?api_key=6ZNi2kxEqo7wWt6AhWBKLhT8Okh34XZLhuZP3wFM&date=${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        if( data.media_type === 'image' ){
          document.querySelector('img').src = data.hdurl
          img.classList.toggle('hidden')
	        iframe.classList.add('hidden')

        }else if(data.media_type === 'video'){
          document.querySelector('iframe').src = data.url
          img.classList.add('hidden')
	        iframe.classList.toggle('hidden')

        }
        document.querySelector('h3').innerText = data.explanation
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}











// if(vido come run this)
// document.querySelector('img').classList('hidden')