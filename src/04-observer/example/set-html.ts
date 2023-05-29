document.getElementById('app')!.insertAdjacentHTML(
  'beforeend',
  `
  <div>
    <label class="mt-5" for="inputName">Nombre:</label>
    <input class="form-control" type="text" id="inputName" aria-label="Escribe algo">
    <button class="mt-2 btn btn-primary">Agregar</button>
  </div>

  <div class="my-3" id="div1"></div>
  <div id="div2"></div>
  <div class="mt-3" id="div3"></div>
`,
);
