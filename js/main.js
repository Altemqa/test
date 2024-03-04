const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
  const select = dropdown.querySelector('.select');
  const caret = dropdown.querySelector('.caret');
  const dropdownMenu = dropdown.querySelector('.dropdown__menu');
  const options = dropdown.querySelectorAll('.dropdown__menu li');
  const selected = dropdown.querySelector('.selected');

  select.addEventListener('click', () => {
    select.classList.toggle('select-clicked');
    caret.classList.toggle('caret-rotate');
    dropdownMenu.classList.toggle('menu-open');
  });

  options.forEach(option => {
    option.addEventListener('click', () => {
      selected.innerText = option.innerText;
      select.classList.remove('select-clicked');
      caret.classList.remove('caret-rotate');
      dropdownMenu.classList.remove('menu-open');
      options.forEach(option => {
        option.classList.remove('dropdown__menu-active');
      });
      option.classList.add('dropdown__menu-active');
    });
  });
});

function outputUpdate(vol) {
  var output = document.querySelector('#volume');
  output.value = vol;
  output.innerHTML = output.value + "%";
}
