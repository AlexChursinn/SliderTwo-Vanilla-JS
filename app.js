/* 1) Получаем кнопки из классов 16-17 строка
2) Чтобы картинки совпали мы подбираем на сколько нужно подобрать топ в консоли чтобы наша картинка и цвет совпали получается top -300vh
3) Получаем класс сайдбар строка 21
4) в 30 строке задаем свой-ства для топа чтобы получить нужный фон пишем такую формулу
5) вызываем мейн слайд и достаем из него все дивы, чтобы получить их число строка 23-24
6) (slidesCount - 1) зададли чтобы вычесть один слайд так как по умолчанию один уже присутствует
7) задаем парамтеры для upbtn and downbtn и задаем параметры что будут делать кнопки при клике
8) создали функцию чтобы обозначить какой слайд по умолчанию будет активным 26 строка
9) В функции прописываем кнопку вверх то слайд +1 и проверка если слайды = колиичество мак слайдов то сбрасываем до нуля и тоже самое прописываем для кнопки вниз и проверку
10) mainSlide.style.transform = `translateY(-2000px)` тут прописываем саму анимацию на сколько опускать картинки чтобы получть необходимую
11) В 23 строке получаем контейнер
12) const height = container.clientHeight и mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`  добавляем сонст высоты и ниже меняем формулы вычисления нужной высоты
 13) sidebar.style.transform = `translateY(${activeSlideIndex * height}px)` и тоже самое делаем для сайдбара и убираем минус в формуле
*/

const upBtn = document.querySelector('.up-button')

const downBtn = document.querySelector('.down-button')

const sidebar = document.querySelector('.sidebar')

const container = document.querySelector('.container')

const mainSlide = document.querySelector('.main-slide')
const slidesCount = mainSlide.querySelectorAll('div').length

let activeSlideIndex = 0

sidebar.style.top = `-${(slidesCount - 1) * 100}vh`

upBtn.addEventListener('click', () => {
  changeSlide('up')
})

downBtn.addEventListener('click', () => {
  changeSlide('down')
})

function changeSlide(direction) {
  if (direction === 'up') {
    activeSlideIndex++
    if (activeSlideIndex === slidesCount)
    {
      activeSlideIndex = 0
    }
  } else if (direction === 'down') {
    activeSlideIndex--
    if (activeSlideIndex < 0) {
      activeSlideIndex = slidesCount - 1
    }
  }

  const height = container.clientHeight

  mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`

  sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`

}