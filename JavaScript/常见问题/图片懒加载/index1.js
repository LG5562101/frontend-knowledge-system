let img = document.getElementsByTagName("img");

// const observer = new IntersectionObserver(changes => {
//   //changes 是被观察的元素集合
//   for(let i = 0, len = changes.length; i < len; i++) {
//     let change = changes[i];
//     // 通过这个属性判断是否在视口中
//     if(change.isIntersecting) {
//       const imgElement = change.target;
//       imgElement.src = imgElement.getAttribute("data-src");
//       observer.unobserve(imgElement);
//       console.log(observer)
//     }
//   }
// })
// Array.from(img).forEach(item => observer.observe(item));
lazyLoad()
window.addEventListener('scroll', lazyLoad)
function lazyLoad() {
  const viewHeight = document.documentElement.clientHeight
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
  for (let i = 0; i < img.length; i++) {
    if (img[i].offsetTop < viewHeight + scrollTop) {
      if (!img[i].getAttribute('data-src')) continue
      img[i].src = img[i].getAttribute('data-src')
    }
  }
}