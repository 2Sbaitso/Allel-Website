import m from "mithril";
import Oeuvres from "../oeuvre";
import mainGrid from "../bg-grid/contactIndex"
import menuComponent from "../component/menu"

const Contact = {
  view: (attrs) => {
    return m('section', {id: 'sec-1', class:'contact-view'},[
        m('div', {class: 'header'}, [
            m('span', {class: 'perspective-rect'}),
            m('div', m('h1', 'Contact')),
            m('span', {class: 'perspective-rect'}),
            m('div', {class:'social-nav'}, [
                m('ul', [
                m('li', [
                    m('a', {href: 'https://www.instagram.com/alleldriss/', target:"blank_"}, m('i', {class:'fab fa-instagram'})),
                ])
                ])
            ]),
            m(menuComponent)
        ]),
        m('div', {class: 'grid-content'}, [
            m('div', {class: 'grid-absolute'}, [
                /* HERE JS GENERATE SOME DIV*/
            ]),
            m('div', {class:'main-contact'}, [
                m('div', {class:'item'}, [
                    m.trust('<div class="heav"><a href="mailto:contact@allel-driss.fr">contact@allel-driss.fr</a></div>'),
                ])
            ])
        ]),
      //m(cursor),
    ])
  },
  oncreate: (e) => {
    mainGrid.load();
  }
};

export default Contact;
