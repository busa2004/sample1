export default class Navigation {
    constructor({$target,onClick,onPosts}){
        this.onClick = onClick
        this.onPosts = onPosts
        this.array = ['home','about']
        this.nav = document.createElement('nav'); 
        
        $target.appendChild(this.nav);

        this.render();
    }

    setList(ul,name){

        const li = document.createElement('li');
        const a = document.createElement('a');
        a.innerHTML = name
        a.addEventListener('click', e => {
            if (name == 'home')
                this.onClick(name)
            if (name == 'about')
                this.onPosts(name)
        });
        li.appendChild(a)
        ul.appendChild(li)
        

    }

    render(){
        const ul = document.createElement('ul');

        this.array.forEach(name => {
            this.setList(ul,name)
        });
        
        this.nav.appendChild(ul)
    }
}