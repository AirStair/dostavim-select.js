/*
* ChildNode.after() polyfill
* from: https://github.com/jserz/js_piece/blob/master/DOM/ChildNode/after()/after().md
*/
(function(x){try{var o=x.prototype;o.after||(o.after=function(){var e,m=arguments,l=m.length,i=0,t=this,p=t.parentNode,n=Node,s=String,d=document;if(p!==null){while(i<l){((e=m[i]) instanceof n)?(((t=t.nextSibling)!==null)?p.insertBefore(e,t):p.appendChild(e)):p.appendChild(d.createTextNode(s(e)));++i;}}});}catch(e){console.log(e);}}(Element));

/*
* dostavimAutocomplete(selector, name, tabIndex, className, id, label)
*/
function dostavimAutocomplete(selector, name, tabIndex, className, id, label) {
    try {
        this.element = document.querySelector(selector);

        this.root = document.createElement('div');

        this.divSection = document.createElement('div');
        this.div = document.createElement('div');

        this.label = document.createElement('div');
        this.input = document.createElement('input');
        this.hiddenInput = document.createElement('input');
        this.button = document.createElement('div');
        this.icon = document.createElement('div');

        this.listSection = document.createElement('div');
        this.list = document.createElement('div');

        this.div.style.cssText = 'display:-webkit-box !important;display:flex !important';
        this.div.style.fontFamily = 'sans-serif !important';
        this.div.style.fontSize = '13px !important';

        this.label.textContent = label;
        this.label.style.color = 'grey !important';
        this.label.style.position = 'absolute !important';
        this.label.style.top = '10px !important';
        this.label.style.left = '15px !important';

        this.input.tabIndex = tabIndex;

        this.input.style.width = '100% !important';
        this.input.style.border = '1px solid lightgrey !important';
        this.input.style.borderRight = '0 !important';
        this.input.style.borderTopLeftRadius = '5px!important';
        this.input.style.borderBottomLeftRadius = '5px !important';
        this.input.style.borderTopRightRadius = '0 !important';
        this.input.style.borderBottomRightRadius = '0 !important';
        this.input.style.fontSize = '16px !important';
        this.input.style.padding = '35px 15px 19px 15px !important';

        this.hiddenInput.type = 'hidden';
        this.hiddenInput.name = name;
        this.hiddenInput.id = id;
        this.hiddenInput.className = className;

        this.button.style.width = '35px !important';
        this.button.style.background = 'white !important';
        this.button.style.border = '1px solid lightgrey !important';
        this.button.style.borderTopRightRadius = '5px !important';
        this.button.style.borderBottomRightRadius = '5px !important';
        this.button.style.cursor = 'pointer !important';
        this.button.style.padding = '16px 10px 5px 10px!important';

        this.icon.style.width = '10px !important';
        this.icon.style.height = '10px !important';
        this.icon.style.borderTop = '1px solid black !important';
        this.icon.style.borderLeft = '1px solid black !important';
        this.icon.style.transform = 'rotate(-135deg) !important';
        this.icon.style.webkitTransition = '.2s all !important';
        this.icon.style.transition = '.2s all !important';
        this.icon.style.marginTop = '10px !important';
        this.icon.style.marginLeft = 'auto !important';
        this.icon.style.marginRight = 'auto !important';

        this.listSection.style.fontFamily = 'sans-serif !important';
        this.listSection.style.position = 'relative !important';

        this.list.style.display = 'none !important';
        this.list.style.width = '100% !important';
        this.list.style.background = 'white !important';
        this.list.style.outline = '1px solid lightgrey !important';
        this.list.style.top = '2px !important';
        this.list.style.position = 'absolute !important';
        this.list.style.zIndex = '1 !important';

        this.input.addEventListener('focus', function () {
            this.list.style.display = 'block !important';
            this.icon.style.transform = 'rotate(45deg) !important';
            this.icon.style.marginTop = '15px !important';
            setTimeout(function () {
                this.input.select();
            }.bind(this));
        }.bind(this));

        this.input.addEventListener('click', function () {
            this.list.style.display = 'block !important';
            this.icon.style.transform = 'rotate(45deg) !important';
            this.icon.style.marginTop = '15px !important';
            this.input.select();
        }.bind(this));

        this.input.addEventListener('input', function () {
            this.regExp = new RegExp('^.*'.concat(this.input.value, '.*$'), 'im');
            for (this.childElementIndex = 0; this.childElementIndex < this.list.childElementCount; this.childElementIndex = this.childElementIndex + 1) {
                if (this.regExp.test(this.list.children[this.childElementIndex].textContent)) {
                    this.list.children[this.childElementIndex].style.display = 'block !important';
                } else {
                    this.list.children[this.childElementIndex].style.display = 'none !important';
                }
            }
            if (this.input.value.length === 0) {
                for (this.childElementIndex = 0; this.childElementIndex < this.list.childElementCount; this.childElementIndex = this.childElementIndex + 1) {
                    this.list.children[this.childElementIndex].style.display = 'block !important';
                }
            }
        }.bind(this));

        this.button.addEventListener('click', function () {
            if (this.list.style.display === 'none') {
                this.list.style.display = 'block !important';
                this.icon.style.transform = 'rotate(45deg) !important';
                this.icon.style.marginTop = '15px !important';
                setTimeout(function () {
                    this.input.select();
                }.bind(this));
            } else if (this.list.style.display === 'block') {
                this.list.style.display = 'none !important';
                this.icon.style.transform = 'rotate(-135deg) !important';
                this.icon.style.marginTop = '10px !important';
            }
        }.bind(this));
        
        document.addEventListener('click', function (e) {
            if (e.target !== this.element && e.target !== this.root && e.target !== this.divSection && e.target !== this.div && e.target !== this.input && e.target !== this.button && e.target !== this.icon && e.target !== this.listSection && e.target !== this.list && e.target !== this.item ) {
                this.list.style.display = 'none !important';
                this.icon.style.transform = 'rotate(-135deg) !important';
                this.icon.style.marginTop = '10px !important';
            }
            return;
        }.bind(this));

        for (this.childElementIndex = 0; this.childElementIndex < this.element.childElementCount; this.childElementIndex = this.childElementIndex + 1) {
            this.item = document.createElement('div');

            this.input.value = this.element.children[0].textContent;
            this.hiddenInput.value = this.element.children[0].value;

            this.item.style.fontSize = '16px !important';
            this.item.style.cursor = 'pointer !important';
            this.item.style.padding = '10px 15px 10px 15px !important';

            this.item.setAttribute('data-key-property', this.element.children[this.childElementIndex].getAttribute('value'));
            this.item.textContent = this.element.children[this.childElementIndex].textContent;

            this.item.addEventListener('click', function (e) {
                this.input.value = e.target.textContent;
                this.hiddenInput.value = e.target.getAttribute('data-key-property');
                setTimeout(function () {
                    this.list.style.display = 'none !important';
                }.bind(this));
                this.icon.style.transform = 'rotate(-135deg) !important';
                this.icon.style.marginTop = '10px !important';
            }.bind(this));

            this.item.addEventListener('mouseover', function (e) {
                e.target.style.background = 'lightgrey !important';
            }.bind(this));

            this.item.addEventListener('mouseout', function (e) {
                e.target.style.background = 'white !important';
            }.bind(this));

            this.list.appendChild(this.item);
        }

        this.div.appendChild(this.label);
        this.div.appendChild(this.input);
        this.button.appendChild(this.icon);
        this.div.appendChild(this.button);

        this.listSection.appendChild(this.list);

        this.root.appendChild(this.div);
        this.root.appendChild(this.hiddenInput);
        this.root.appendChild(this.listSection);

        this.element.after(this.root);

        this.element.parentNode.removeChild(this.element);
    } catch (e) {
        console.log(e);
    }
}
