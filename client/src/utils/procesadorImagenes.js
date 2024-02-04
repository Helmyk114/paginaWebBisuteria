function procesarImagen(url) {
  const patron = /^.*\/IRis\/uploads\/(products|workers)\//;

  if (patron.test(url)) {
    const photo = url.replace(/^.*\/uploads\/(products|workers)/, "uploads/$1") 
    console.log(photo)
    return url.replace(/^.*\/uploads\/(products|workers)/, "uploads/$1") 
  } else {
    return url
  }
};

export default procesarImagen;