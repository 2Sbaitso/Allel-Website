import m from "mithril";

const Cursor = {
    view: (attrs) => {
        return m('svg', {
            class: 'cursor',
            width: '80',
            height: '80',
            viewBox: '0 0 80 80'
        }, [
            m('circle', {
                class: 'cursor__inner',
                cx: '40',
                cy: '40',
                r: '20'
            })
        ])
    }
}

export default Cursor;