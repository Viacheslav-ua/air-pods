const chooseColor = document.querySelectorAll('.choose-color__btn')
const contentItem = document.querySelectorAll('.content-item')

chooseColor.forEach(el => el.addEventListener('click', handlerBtn))

function handlerBtn(e) {
  const target = e.currentTarget
  const button = target.dataset.button
  const contentActive = document.querySelectorAll(`.${button}`)

  chooseColor.forEach(el => el.classList.remove('choose-color__btn--active'))
  target.classList.add('choose-color__btn--active')

  contentItem.forEach(el => el.classList.remove('content-item--active'))

  contentActive.forEach(el => el.classList.add('content-item--active'))
}