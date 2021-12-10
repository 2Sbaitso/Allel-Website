import m from "mithril";

const Bio = {
  view: (attrs) => {
    return m('section', {id: 'sec-1', class:'bio'},[
      m('div', {class: 'header'}, [
        m('span', {class: 'perspective-rect'}),
        m('div', m('h1', 'Allel Driss')),
        m('span', {class: 'perspective-rect'}),
        m('div', {class:'social-nav'}, [
          m('ul', [
            m('li', [
              m('a', {href: 'https://www.instagram.com/alleldriss/', target:"blank_"}, m('i', {class:'fab fa-instagram'})),
            ])
          ])
        ]),
        m('div', {class:"hooked-data"}, [
          m('div', {class:""}, [
            m('span', 'Scuplteur' )
          ]),
        ]),
      ]),
      m('div', {class: 'main-centered'}, [
        m('div', {class:"text-container"}, [
          m('h3', '1951'),
          m('span', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'),
          m('div'),
          m('h3', '1984'),
          m('span', 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'),
          m('div'),
          m('h3', '2001'),
          m('span', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'),
          m('div'),
          m('h3', '2021'),
          m('span', 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.')
        ])
      ]),
      m("div", {class:"bg-container"}, [
        m("div", {class: 'bg-image', 'style': { 'background-image' : 'url(\"img/7.jpg\")'}}),
        m("div", {class: 'black-voile'}),
      ])
    ])
  }
};

export default Bio;
