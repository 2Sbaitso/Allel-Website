import m from "mithril";
import Oeuvres from "./oeuvre"
import Bio from "./page/bio"
import Credit from "./page/credit"
import Contact from "./page/contact"
import MenuComponent from "./component/menu"
/*import Cursor from './other/cursor';*/

const Index = {
  siteIsLoaded : false, // set to false in prod env.
  currentIndex : null,
  nextIndex : null,
  previousIndex : null,
  currentImgElement : null,
  cursorIsInit : false,
  view: () =>
    Index.siteIsLoaded ? 
    Index.mainView() : Index.loaderView(),
  mainView: function(){
    return m('section', {id: 'sec-1'},[
      m('div', {class: 'header'}, [
        m('span', {class: 'perspective-rect'}),
        m('div', m('h1', Oeuvres[Index.currentIndex].name)),
        m('span', {class: 'perspective-rect'}),
        m('div', {class:'social-nav'}, [
          m('ul', [
            m('li', [
              m('a', {href: 'https://www.instagram.com/alleldriss/', target:"blank_"}, m('i', {class:'fab fa-instagram'})),
            ])
          ])
        ]),
        m(MenuComponent)
      ]),
      m('div', {class: 'main-centered'}, [
        m('img', {src: 'img/' + Oeuvres[Index.currentIndex].imgName, alt: Oeuvres[Index.currentIndex].name})
      ]),
      m('div', {class:'center-indicator'}, [
        m('div', {class:'previous'}, 
          m('div', 
            m(m.route.Link, {
              href: '/'+ Oeuvres[Index.previousIndex].path,
              onclick: function(e){
                e.preventDefault()
                Index.initTransitionTo(Index.previousIndex)
              },
            }, Oeuvres[Index.previousIndex].name)
          )
        ),
        m('div', {class:'next'}, 
          m('div', 
            m(m.route.Link, {
              href: '/'+ Oeuvres[Index.nextIndex].path,
              onclick: function(e){
                e.preventDefault()
                Index.initTransitionTo(Index.nextIndex)
              },
            }, Oeuvres[Index.nextIndex].name)
          )
        ),
      ]),
      m('div', {class:"hooked-data"}, [
        m('div', {class:"size-data"}, [
          m('span', '(' + Oeuvres[Index.currentIndex].height + ' cm)' )
        ]),
      ]),
      m("div", {class:"bg-container"}, [
        Index.getBackground(Oeuvres[Index.currentIndex]),
        m("div", {class: 'black-voile'}),
      ]),
      m("footer", [
        m('div', {class:"credit"}, [
          m('div', [
            m('div', 'ALLeL DRISS'),
            m('div', 'SCULPTEUR')
          ]),
        ]),
        m('div', {class:""}, [
          m('div', {class:"indicator-ico"},[
            m(m.route.Link, {
              href: '/'+ Oeuvres[Index.previousIndex].path,
              onclick: function(e){
                e.preventDefault()
                Index.initTransitionTo(Index.previousIndex)
              },
            }, m('i', {class:'fas fa-long-arrow-alt-left'})),
            m(m.route.Link, {
              href: '/'+ Oeuvres[Index.nextIndex].path,
              onclick: function(e){
                e.preventDefault()
                Index.initTransitionTo(Index.nextIndex)
              },
            }, m('i', {class:'fas fa-long-arrow-alt-right'}),),
          ])
        ]),
      ]),
      m('div', {class:"indicator-index"}, [
        m('div',[
          m('div', [
            m('span', {class:"current-index"}, Index.currentIndex + 1),
          ]),
          m('div', [
            m('span', 'sur ', Oeuvres.length), 
          ])

        ])
      ]),
    ])
  },
  getBackground: function(item){
    if (item.selfBackground) {
        return m("div", {class: 'bg-image', 'style': { 'background-image' : 'url(\"img/'+ Oeuvres[Index.currentIndex].imgName +'\")'}})
    }else{
        return m("div", {class: 'bg-image', 'style': { 'background-image' : 'url(\"img/'+ '7.jpg'/*Oeuvres[Index.currentIndex].imgName*/ +'\")'}})
    }
  },
  loaderView: function(url){
    return m('section', {id: 'sec-1', class:"credit-view"},[
      m('div', {class:"loader-text-container"},
        m('div', {class:"credit-loader"}, [
          m('div', [
            m('div', ['ALL', m('span', 'e'), 'L DRISS']),
            m('div', 'SCULPTEUR')
          ]),
        ]),
      ),
      m("div", {class:"bg-container"}, [
        m("div", {class: 'bg-image', 'style': { 'background-image' : 'url(\"img/'+ Oeuvres[Index.currentIndex].imgName +'\")'}}),
        m("div", {class: 'black-voile-credit'}),
      ]),
    ])
  },
  preloadImageUrl: function(url){
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.addEventListener('load', () => resolve(img));
      img.addEventListener('error', (err) => reject(err));
      img.src = url;
    });
  },
  oninit: function(vnode) {
    var params = m.route.param("oeuvrePath")
    Oeuvres.map(function(item, i){
      if(item.path == params){
        Index.currentIndex = i
        Index.setAllIndex(i)
      }
    })
    if(Index.currentIndex == null){
      console.log('url not found so... set defaut to 0')
      Index.currentIndex = 0
      Index.setAllIndex(Index.currentIndex)
    }
    /*if(!Index.cursorIsInit){
      var cursor = new Cursor(document.querySelector('.cursor'));
      [...document.querySelectorAll('a')].forEach(link => {
          link.addEventListener('mouseenter', () => cursor.enter());
          link.addEventListener('mouseleave', () => cursor.leave());
      });
      Index.cursorIsInit = true
    }*/
  },
  onbeforeremove: function(){
    return new Promise((resolve) => {
      setTimeout(function () {
        resolve()
      }, 300);
    })
  },
  initTransitionTo: function(index){
    var e = document.querySelector('#sec-1')
    e.classList.add("outAnim");
    setTimeout(function () {
      m.route.set("/" + Oeuvres[index].path, null, {state: {key: Date.now()}})
    }, 1000);
  },
  /*updateResponsiveUi: function() {
    var e = document.querySelector('.main-centered img')
    var left = document.body.offsetWidth - (e.offsetWidth + e.offsetLeft)
    var width = e.offsetWidth
    var top = e.offsetHeight + e.offsetTop
    Index.fixHookedDataDiv(left, width, top)
  },*/
  oncreate: function(vnode) {
    if(!Index.siteIsLoaded){
      this.initAllImage()
    }
  },
  fixHookedDataDiv: function(leftPosition, width, top){
    var hookedDiv = document.querySelector('.hooked-data')
    hookedDiv.style.width = width + "px";
    hookedDiv.style.left = leftPosition + "px";
    hookedDiv.style.top = (top+2) + "px";
  },
  setAllIndex: function(curIndex){
    Index.nextIndex = curIndex+1
    Index.previousIndex = curIndex-1
    if(Index.nextIndex > Oeuvres.length-1){ // index not exist so set to start
      Index.nextIndex = 0
    }
    if(Index.previousIndex < 0){ // index not exist so set to start
      Index.previousIndex = Oeuvres.length-1
    }
  },
  initAllImage(){
    return new Promise((resolve, reject) => {
      var allPromise = []
      Oeuvres.map(oeuvre => {
        allPromise.push(Index.preloadImageUrl('img/' + oeuvre.imgName))
      })
      Promise.all(allPromise).then(() => {
        setTimeout(() => {
          var e = document.querySelector('#sec-1')
          e.classList.add("play")
          setTimeout(() => {
            Index.siteIsLoaded = true
            m.redraw()
            resolve()
          }, 300)
        }, 2000)
        
      })
    })
  },
  preloadImageUrl: function(url){
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.addEventListener('load', () => resolve(img));
      img.addEventListener('error', (err) => reject(err));
      img.src = url;
    });
  }
}

//window.onresize = Index.updateResponsiveUi;
m.route.prefix = '#'

const mountNode = document.querySelector("#app");

const routes = {
  "/credits": Credit,
  "/contact": Contact,
  "/bio": Bio,
  "/:oeuvrePath": Index
};

m.route(mountNode, '/' + Oeuvres[0].path, routes);
