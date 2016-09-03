var famousPeople = [
{
  title: "Musician",
  name: "Elvis Presley",
  bio: "Born, made music and died at a later date.",
  image: "http://cdn.mensagenscomamor.com/content/images/img/t/trechos_musicas_elvis_presley_always_on_my_mind.jpg",
  lifespan: {
    birth: 1935,
    death: 1977
  }
},
{
  title: "American President",
  name: "Abe Lincoln",
  bio: "Born, ran the country and died at a later date.",
  image: "http://tsminteractive.com/files/2012/11/Abraham-Lincoln.jpg?w=300&h=200&zc=1&s=0&a=t&q=89",
  lifespan: {
    birth: 1809,
    death: 1865
  }
},
{
  title: "Actress",
  name: "Angelina Jolie",
  bio: "Born, did nothing and died. Well, hasn't kicked the bucket yet.",
  image: "http://www.thewrap.com/wp-content/uploads/2014/09/angelina-jolie-300x200.jpg",
  lifespan: {
    birth: 1975,
    death: "sometime this century"
  }
}

];

var outputEl = document.getElementById("outputEl");
for (var counter = 0; counter < famousPeople.length; counter++) {
  // Give each person element a unique identifier
  outputEl.innerHTML += `<person class="person__container" id="person--${counter}">${famousPeople[counter].title}<header id="bio">${famousPeople[counter].bio}</header><img src ="${famousPeople[counter].image}"><footer id="lifespan">${famousPeople[counter].lifespan.birth}-${famousPeople[counter].lifespan.death}</footer></person>`;
}

// Now containerEl will have elements in it
var containerEl = document.getElementsByClassName("person__container");

// Event listeners are created
for (var i = 0; i < containerEl.length; i++) {
  containerEl[i].addEventListener("click", function (event) {
    // Logic to execute when the element is clicked
  });
};

