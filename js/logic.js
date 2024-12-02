let arrayNotes = [];

async function fetchNotes() {
    try {
      const response = await fetch('./assets/data/notes.json');
      if (!response.ok) {
        throw new Error(`Error al cargar el JSON: ${response.status} ${response.statusText}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return [];
    }
  }
  
  fetchNotes().then((data) => {
    if (data.length === 0) {
    } else {
      console.log('Array cargado correctamente:', data);
    }
});
  

//trabajar con los datos obtenidos durante el dia de manañana 


const containerNotes = document.getElementById('containerNotes');

function renderNotes() {
  containerNotes.innerHTML = '';
  arrayNotes.forEach((note) => {
    const div = document.createElement('div');
    div.classList.add('notesClass');
    div.innerHTML = `
    <span class="delete2" id"deletePost">&times;</span>
      <span class="delete">&times;</span>
      
      <img src="${note.img}">
      <h3>${note.title} n°${note.id}</h3>
      <p>${note.content}</p>
      <br>
      `;
      containerNotes.appendChild(div);
    });
  }
  
  arrayNotes.forEach(note => {
    note.img = randomImg(collectionImg);
  });
  
  renderNotes();

// =================== random img ================= 

const collectionImg = [
  'assets/gallery/argentina.jpg',
  'assets/gallery/fiat-uno.jpg',
  'assets/gallery/floppa.jpg',
  'assets/gallery/fulvo.jpg',
  'assets/gallery/maestroSplinter.jpg',
  'assets/gallery/mondongo.jpg',
  'assets/gallery/rei.jpg',
  'assets/gallery/skeleto.jpg'
];

function randomImg(collectionImg) {
  const randomIndex = Math.floor(Math.random() * collectionImg.length);
  return collectionImg[randomIndex];
}

// inicializamos

fetchNotes().then((data) => {
    arrayNotes = data;
    arrayNotes.forEach((note) => {
      note.img = randomImg(collectionImg);
    });
    renderNotes();
});

//esto deberia llamarse tarjeta o algo por el estilo
// add new note

// ========================  Fill form ===================
const title = document.getElementById('title');
const content = document.getElementById('text');
const btnSave = document.getElementById('btnSave');

btnSave.addEventListener('click', (e) => {
  e.preventDefault();

  // campos vacios
  if (title.value.trim() === '' || content.value.trim() === '') {
      alert('Por favor, completa todos los campos antes de guardar.');
      return;
  }

  const pushNote = {
      id: arrayNotes.length + 1,
      title: title.value,
      content: content.value,
      img: randomImg(collectionImg)
  };

  arrayNotes.push(pushNote);
  console.log(arrayNotes);
  renderNotes();
  title.value = '';
  content.value = ''; 

  renderLS();
});

// localStorage render

const renderLS = () => {
  localStorage.setItem("notes",JSON.stringify(arrayNotes))
}
