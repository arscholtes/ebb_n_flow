SC.initialize({
  client_id: '8538a1744a7fdaa59981232897501e04',
});

var audio = document.querySelector('.music-player');
var results = document.querySelector('.searchResults');
var button = document.getElementById('.submit');

// button.addEventListener('click', function(evt){
//   evt.preventDefault();
// });


function initalSearch(search) {

  SC.get('/tracks', {
      q: search,
      limit: 16,
    })
    .then(function(tracks) {
      //    console.log(tracks);
      return tracks;
    })
    .then(function(json) {

      console.log(json);

      json.map(function(name) {
        let trackName = name.title;
        let cover = name['artwork_url'];
        var div = document.createElement('div');

        results.appendChild(div);
        var image = document.createElement('img');
        image.setAttribute('src', cover ||"");
        div.appendChild(image);
        var title = document.createElement('h3');
        title.textContent = trackName;
        div.appendChild(title);


      })

    })
}
initalSearch('');
