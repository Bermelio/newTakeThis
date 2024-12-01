let arrayNotes = [];

async function fetchNotes() {
    try {
      const response = await fetch('./assets/data/notes.json');
      if (!response.ok) {
        throw new Error(`Error al cargar el JSON: ${response.status} ${response.statusText}`);
      }
      const data = await response.json();
      console.log('Notas cargadas:', data);
      return data;
    } catch (error) {
      console.error('Error en fetch:', error);
      return [];
    }
  }
  
  fetchNotes().then((data) => {
    if (data.length === 0) {
      console.warn('El array está vacío. Revisa la ruta o el JSON.');
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
            <h3>${note.title} n°${note.id}</h3>
            <p>${note.content}</p>
            <br>
            <img src="${note.img}">
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