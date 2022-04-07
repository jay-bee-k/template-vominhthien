export default function createCloneNode() {
    function cloneNode(elem, item) {
        const itm = document.getElementById(item);
        const cln = itm.cloneNode(true);
        document.getElementById(elem).appendChild(cln)
    }

    document.addEventListener('DOMContentLoaded', () => {
        const addClassify = document.getElementById('addClassify');
        if(addClassify) {
            addClassify.addEventListener('click', () => {
                cloneNode('listProduct', 'itemProduct');
            })
        }

        const addProduct = document.getElementById('addProduct');
        if(addProduct) {
            addProduct.addEventListener('click', () => {
                cloneNode('listCardProduct', 'itemCardProduct');
            })
        }

        const addRequirement = document.getElementById('addRequirement');
        if(addRequirement) {
            addRequirement.addEventListener('click', () => {
                cloneNode('listRequirement', 'itemRequirement');
            })
        }

        const addDeclare = document.getElementById('addDeclare');
        if(addDeclare) {
            addDeclare.addEventListener('click', () => {
                cloneNode('listCardDeclare', 'cardDeclare');
            })
        }

        const addAddress = document.getElementById('addAddress');
        if(addAddress) {
            addAddress.addEventListener('click', () => {
                cloneNode('listAddress', 'cardAddress');
            })
        }
    });
}