// Importa todas las imágenes PNG de este directorio usando glob
const images = import.meta.glob<string>('./*.png', {
    query: '?url',
    import: 'default',
});

const techStackImages = Object.values(images).map((img) => img());

export default techStackImages;
