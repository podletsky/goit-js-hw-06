const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


const li = document.createElement('li')
const img = document.createElement('img')
li.append(img)
const arrayImages = images.map(({ url, alt }) => {
  return `<li class="gallery__item" ><img src=${url} alt=${alt} width='320'><li>`
}
)
const galerryList = document.querySelector('.gallery')
galerryList.insertAdjacentHTML('afterbegin',arrayImages)


console.log(arrayImages)