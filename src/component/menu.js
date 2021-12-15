import m from "mithril";
import Oeuvres from "../oeuvre/index"
import { getInlineSplited } from '../other/utils';

const Menu = {
  view: (attrs) => {
    return [ 
        m('div', {id : 'burger-menu'}, [
            m('a', {
                class:'burger-container',
                onclick: function(){
                    var e = document.querySelector('#menu-view')
                    e.style.display = "block";
                }
            }, [
                m('div'),
                m('div'),
                m('div')
            ])
        ]),
        m('div', {id: 'menu-view', class:''}, [
            m('div', {class:'container'}, [
                m('div', {class:'left-side full-width-om'}, [
                    /*m('div', {class:'vertical-text hide-om'}, [
                        m('div', {class:'text-container'},[
                            m('div', 'sculptures')
                        ])
                    ]),*/
                    m('a', {
                        onclick: function(){
                            Menu.close()
                        },
                        class:'close-menu'}, 
                    [
                        m('i', {class:'fas fa-long-arrow-alt-left'}),
                        m('span', 'back')
                    ]),
                    m('div', {class:'menu-items'}, [
                        m('ul', [
                            m('li', m('a', {
                                href: '',
                            }, [
                                //m('div'),
                                getInlineSplited('home'),
                                //m('div')
                            ])),
                            m('li', m(m.route.Link, 
                                {
                                    href: '/contact',
                                    onclick: function(e){
                                        e.preventDefault()
                                        Menu.close('contact')
                                    }
                                }, [
                                //m('div'),
                                getInlineSplited('contact'),
                                //m('div')
                            ])),
                            m('li', m('a', [
                                //m('div'),
                                getInlineSplited('bio'),
                                //m('div')
                            ])),
                            m('li', m(m.route.Link, 
                                {
                                    href: '/credits',
                                    onclick: function(e){
                                        e.preventDefault()
                                        Menu.close('credits')
                                    }
                                }, [
                                //m('div'),
                                getInlineSplited('credits'),
                                //m('div')
                            ])),
                        ])
                    ]),
                    m('a', {class:'bottom-link', href: 'https://www.instagram.com/alleldriss/', target:"blank_"}, [
                        m('i', {class:'fab fa-instagram'}),
                        m('span', 'Allel driss')
                    ]),
                ]),
                m('div', {class:'right-side hide-om'}, [
                    m('div', {class:'mansory-container'}, [
                        m('div', {class:'mansory'}, [
                            Oeuvres.map(item => {
                                return m(m.route.Link, {
                                    class: 'item',
                                    href: '/'+ item.path,
                                    onclick: function(e){
                                        e.preventDefault()
                                        Menu.close(item.path)
                                    }
                                }, [
                                    m('div', [
                                        m('img', {src: 'img/' + item.imgName}),
                                        m('div', {class:'name-img'}, item.name)
                                    ])
                                ])
                            })
                        ])
                    ]),
                    m('div', {class:'bg-image-menu'}),
                    m('div', {class:'black-voile'}),
                ])
            ])
        ])
    ]
  }, 
  close : function(redirectLink){
    if(redirectLink){
        var e = document.querySelector('#sec-1')
        e.classList.add("outAnim");
        setTimeout(function () {
            m.route.set('/' + redirectLink, null, {state: {key: Date.now()}})
          }, 1000);
    }
    var e = document.querySelector('#menu-view')
    e.classList.add("outAnim");
    setTimeout(function () {
      e.classList.remove("outAnim");
      e.style.display = "none";
    }, 1000);
  },
};

export default Menu;
