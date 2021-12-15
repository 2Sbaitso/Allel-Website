import m from "mithril";
import mainGrid from "../bg-grid/index"
import menuComponent from "../component/menu"

const Mosaic = {
  view: (attrs) => {
    return m('section', {id: 'sec-1', class:'credit-view'},[
        m('div', {class: 'header'}, [
            m('span', {class: 'perspective-rect'}),
            m('div', m('h1', 'Credits')),
            m('span', {class: 'perspective-rect'}),
            m('div', {class:'social-nav'}, [
                m('ul', [
                m('li', [
                    m('a', {href: 'https://www.instagram.com/alleldriss/', target: "blank_"}, m('i', {class: 'fab fa-instagram'})),
                ])
                ])
            ]),
            m(menuComponent)
        ]),
        m('div', {class: 'grid-content'}, [
            m('div', {class: 'grid'}, [
            m('div', {class: 'grid__item pos-1'}, m('div', {class:'grid__item-img', style: 'background-image:url(img/15.jpg);'})),
            m('div', {class: 'grid__item pos-2'}, m('div', {class:'grid__item-img', style: 'background-image:url(img/3.jpg);'})),
            m('div', {class: 'grid__item pos-3'}, m('div', {class:'grid__item-img', style: 'background-image:url(img/10.jpg);'})),
            m('div', {class: 'grid__item pos-4'}, m('div', {class:'grid__item-img', style: 'background-image:url(img/18.jpg);'})),
            m('div', {class: 'grid__item pos-5'}, m('div', {class:'grid__item-img', style: 'background-image:url(img/17.jpg);'})),
            m('div', {class: 'grid__item pos-6'}, m('div', {class:'grid__item-img', style: 'background-image:url(img/16.jpg);'})),
            m('div', {class: 'grid__item pos-7'}, m('div', {class:'grid__item-img', style: 'background-image:url(img/8.jpg);'})),
            m('div', {class: 'grid__item pos-8'}, m('div', {class:'grid__item-img', style: 'background-image:url(img/9.jpg);'})),
            m('div', {class: 'grid__item pos-9'}, m('div', {class:'grid__item-img', style: 'background-image:url(img/19.jpg);'})),
            m('div', {class: 'grid__item pos-10'}, m('div', {class:'grid__item-img', style: 'background-image:url(img/1.jpg);'})),
            ]),
            m('div', {class:'main-credit'}, [
                m('div', {class:'item'}, [
                    m('h2', 'Oeuvres & Photos'),
                    m.trust('<span class="heav">Allel Driss</span>'),
                ]),
                m('div', {class:'item'}, [
                    m('h2', 'Bronze'),
                    m.trust('<span class="heav">Fonderie CHAPON</span>'),
                ]),
                m('div', {class:'item'}, [
                    m('h2', 'Design & site'),
                    m.trust('<span class="heav">Louis Brahmi</span>'),
                ]),
            ])
        ]),
      //m(cursor),
    ])
  },
  oncreate: (e) => {
    mainGrid.load();
  }
};

export default Mosaic;
