import Navigation from './components/Navigation.js'
import Content from './components/Content.js'
import { api } from './api/api.js';
import { crolling } from './api/crolling.js';
export default class App {
    constructor($target){
        const navigation = new Navigation({$target,
            onClick : name =>{
                content.change({name : name})
            },
            onPosts: async (name) => {

                const response = await api.posts();
                const croll = await crolling.posts();
                if(!response.isError){
                    content.change({name : name, data : response.data, croll : croll.data})
                } else {
                    console.log(response.data);
                }
            }
        });
        const content = new Content({$target,print});   

        
    }
}