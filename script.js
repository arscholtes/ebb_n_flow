SC.initialize({
  client_id: '8538a1744a7fdaa59981232897501e04',
});

var audio = document.querySelector('#music-player');
var results = document.querySelector('#searchResults');
var button = document.querySelector('#submit');
var search = document.querySelector('#initialSearch');

button.addEventListener('click', function(event) {
      // function initalSearch() {

        SC.get('/tracks', {
            q: search.value,
            limit: 24,
          })
          // .then(function(tracks) {
          //   //    console.log(tracks);
          //   return tracks.json();
          // })
          .then(function(json) {

            console.log(json);

            json.map(function() {
              let trackName = name.title;
              let cover = name['artwork_url'];
              var div = document.createElement('div');
              div.addEventListener('click', function(event) {
                SC.oEmbed(name.uri, {
                  element: document.getElementById('player'),
                  auto_play: true
                });

              });

              results.appendChild(div);
              var image = document.createElement('img');
              image.setAttribute('src', cover || '');
              div.appendChild(image);
              var title = document.createElement('h3');
              title.textContent = trackName;
              div.appendChild(title);


            });

          });
        });
        // initalSearch('new');
