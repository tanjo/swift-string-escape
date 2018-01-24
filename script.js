window.onload = () => {
  document.getElementById('input').addEventListener('input', (event) => {
    document.getElementById('output').value = event.target.value.replace(/"/g,'\\"');
  });
};
