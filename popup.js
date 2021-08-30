document.addEventListener('DOMContentLoaded', function () {
  goFetch()
  document.getElementById('myInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      sorter()
    }

  });
});

var namelist = [];
var urllist = [];
function goFetch() {
  const request_URL = "http://emoji.gg/api/";
  //const imageList = document.getElementById("new");
  //Start the fetching request with request_URL
  fetch(request_URL)
    .then(data => {
      return data.json(); //Returning the data blob to the fetch request so we can extract the JSON from it.
    })
    .then(posts => {
      posts.forEach(post => {
        //Defining 'PostObject'
        let postObject = {
          imgname: post.title,
          imgurl: post.image
        };
        //var image = '<li style="display: none;" id="' + postObject.imgname + '"><img src="' + postObject.imgurl + '"></li>';
        //imageList.innerHTML += image;
        namelist.push(postObject.imgname);
        urllist.push(postObject.imgurl);
      });
    });
  console.log(namelist);
};

function sorter() {
  var input, filter, ul, i, txtValue,defaultStuff;
  input = document.getElementById("myInput");
  defaultStuff = document.getElementById("premade");
  filter = input.value.toUpperCase().replace(" ", "_");
  ul = document.getElementById("new");
  ul.innerHTML = '';

  if (defaultStuff.style.display != "none") {
    defaultStuff.style.display = "none";
  }

  for (i = 0; i < namelist.length; i++) {
    txtValue = namelist[i];
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      var image = '<li><img src="' + urllist[i] + '"></li>';
      ul.innerHTML += image;
    } else {
    }
  }
}