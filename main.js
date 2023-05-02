const reviews = [
    {
      id: 1,
      name: 'Rick Sanchez',
      job: 'web developer',
      img: 'https://images2.imgbox.com/e0/57/qI5bbwvg_o.jpeg',
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla est neque ea distinctio sunt nemo illum impedit aperiam consectetur corporis."
    },
    {
      id: 2,
      name: 'Morty Smith',
      job: 'web designer',
      img: 'https://images2.imgbox.com/2e/6e/JAMvTZ56_o.jpeg',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla est neque ea distinctio sunt nemo illum impedit aperiam consectetur corporis.',
    },
    {
      id: 3,
      name: 'peter jones',
      job: 'intern',
      img: 'https://images2.imgbox.com/56/88/oJvFN3l5_o.jpeg',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla est neque ea distinctio sunt nemo illum impedit aperiam consectetur corporis.',
    },
    {
      id: 4,
      name: 'bill anderson',
      job: 'the boss',
      img: 'https://images2.imgbox.com/8b/1c/vwWNTsCd_o.jpeg',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla est neque ea distinctio sunt nemo illum impedit aperiam consectetur corporis. ',
    },
  ];

  //constantes para treaer los id del articulo
  const img = document.getElementById('person-img');
  const author = document.getElementById('author');
  const job = document.getElementById('job');
  const info = document.getElementById('info');
  
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  const randomBtn = document.querySelector('.random-btn');

  //configuracion del articulo js
  let currentItem = 0;

  //Item inicial
  window.addEventListener("DOMContentLoaded", function () {
    showperson();
    
  })

  //function para mostrar la persona
  function showperson(person){
    const item = reviews[currentItem];
    img.src = item.img; 
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
  }

  //botones, mostrar persona
  nextBtn.addEventListener('click', function(){
    currentItem++;
    if(currentItem > reviews.length -1){
      currentItem = 0;  
    }
    showperson()
  })

  prevBtn.addEventListener('click',function(){
    currentItem--;
    if(currentItem < 0){
      currentItem = reviews.length -1;
    }
    showperson(currentItem);
  })

  randomBtn.addEventListener('click',function(){
    currentItem = Math.floor(Math.random() * reviews.length);
    showperson();
  })