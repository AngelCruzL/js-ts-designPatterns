document.getElementById('app')!.insertAdjacentHTML(
  'beforeend',
  `
  <label class="mt-5" for="myInput">Escribe algo</label>
  <input class="form-control" type="text" id="myInput" aria-label="Escribe algo">
  <div class="my-3" id="div1"></div>
  <div id="div2"></div>
`,
);
