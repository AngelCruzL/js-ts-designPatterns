const app = document.getElementById('app')!;

app.insertAdjacentHTML(
  'beforeend',
  `
  <div class="my-5">
    <label for="selectOptions">Selecciona la opción</label>
    <select class="form-select" id="selectOptions">
      <option value="0">Lista</option>
      <option value="1">Lista con detalle</option>
      <option value="2">Lista con imagen</option>
    </select>
  </div>

  <div id="listContent"></div>
`,
);
