const apiUrl ='https://sheet.best/api/sheets/b49040e2-472d-4117-b33c-cb98fbb8d6cb';

//catura de formul

const form = document.getElementById('crudForm');
const dataTable = document.getElementById('dataTable')

//cosumir API  READ

const getData = async () => {
try {
    const response = await axios.get(apiUrl);
    renderTable (response.data);
} catch (error) {
    console.errror('Error al obtener los datos', error);
}
}

const renderTable = (data) => {
console.log(date);
dataTable.indexHTML= '';
data.forEach(item => {
  const row = `<tr class="border-b">
    <td class="">${item.name}</td>
    <td class="">${item.lastName}</td>
    <td class="">${item.phone}</td>
    <td class=""><img src="${item.img}" alt=""></td>
    </tr>` 
    dataTable.insertAdjacentHTML('beforeend', row);
});
}

getData();