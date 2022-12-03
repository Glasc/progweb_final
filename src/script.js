const bicicletasWrapper = document.querySelector("#bicicletas-wrapper");
const cascosWrapper = document.querySelector("#cascos-wrapper");

const renderCardForWrapper = (wrapper, data) => {
  data.forEach((item) => {
    wrapper.insertAdjacentHTML(
      "beforeend",
      ` <div class="w-full rounded-md shadow-xl card bg-base-100">
    <figure><img src="${item?.img_url}" alt="Shoes" /></figure>
    <div class="card-body">
      <h2 class="card-title text-accent/90 font-semibold">${item?.nombre}</h2>
      <p>${item?.descripcion}</p>
      <p>Marca: <span class="text-accent">${item?.marca}</span></p>
      <p class="text-lg text-primary-content">$${item?.precio}.00</p>
      <div class="justify-end card-actions">
        <button class="btn btn-secondary">Comprar</button>
      </div>
    </div>
  </div>`
    );
  });
};

const getBicicletas = async () => {
  // fetch with no cors mode

  const response = await fetch(
    `${process.env.API_URL}/bicicletas`
  );

  const data = await response.json();

  if (response.ok) {
    renderCardForWrapper(bicicletasWrapper, data);
    return data;
  }
};



const getCascos = async () => {
  // fetch with no cors mode

  const response = await fetch(
    `${process.env.API_URL}/cascos`
  );

  const data = await response.json();

  if (response.ok) {
    renderCardForWrapper(cascosWrapper, data);
    return data;
  }
};

getCascos();
getBicicletas();
