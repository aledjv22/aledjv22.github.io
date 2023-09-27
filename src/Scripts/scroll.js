function scroll (id) {
  let destination = document.getElementById(`${id}-section`);

  destination.scrollIntoView({ behavior: 'smooth' });
}

export default scroll;