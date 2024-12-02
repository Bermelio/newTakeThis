
// let arrayLocal = JSON.parse(localStorage.getItem("arrayLocal"))||[];

// function renderNotes() {
//     containerNotes.innerHTML = '';
//     arrayLocal.forEach((note) => {
//       const div = document.createElement('div');
//       div.classList.add('notesClass');
//       div.innerHTML = `
//       <span class="delete2" id"deletePost">&times;</span>
//         <span class="delete">&times;</span>
        
//         <img src="${note.img}">
//         <h3>${note.title} n°${note.id}</h3>
//         <p>${note.content}</p>
//         <br>
//         `;
//         containerNotes.appendChild(div);
//       });
//     }
    
//     arrayLocal.forEach(note => {
//       note.img = randomImg(collectionImg);
//     });
    
//     renderNotes();
  