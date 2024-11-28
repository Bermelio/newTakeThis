// first take the data
fetch('./assets/data/notes.json').then((response) => {
    if (!response.ok) {
        throw new Error('Error al cargar el archivo JSON');
    }
    return response.json();
  }).then((data) => {
    console.log('Datos obtenidos del JSON:', data);
 }).catch((error) => {
    console.error('Error en el fetch:', error);
});
