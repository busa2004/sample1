import Card from './Card.js';

export default class Content{
    constructor({$target,print}){
        this.data = {name: 'home'}
        this.print = print
        this.content = document.createElement('div');
        this.content.className = 'content'
        
        $target.appendChild(this.content)
        
        this.render()
    }

    change(data){

        this.data = data
        this.render()
    }

    setList(table,data){
        
        const tr = document.createElement('tr');
        const th = document.createElement('th');
        const price = document.createElement('td'); 
        const count = document.createElement('td');
        const now = document.createElement('td');
        const total = document.createElement('td');
        const nowTotal = document.createElement('td');
        const profit = document.createElement('td');
        th.scope = 'row'
        th.innerHTML = data.title;
        price.innerHTML = data.price;
        count.innerHTML = data.count;
        
        if (data.title == 'QQQ'){
        now.innerHTML = this.data.croll.nowPrice
        nowTotal.innerHTML = (parseFloat(this.data.croll.nowPrice.substring(1)) * data.count).toFixed(2)
        }
        total.innerHTML = (data.price * data.count).toFixed(2)
        profit.innerHTML = (nowTotal.innerHTML - total.innerHTML).toFixed(2)
        
        tr.appendChild(th)
        tr.appendChild(profit)
        tr.appendChild(nowTotal)
        tr.appendChild(total)
        tr.appendChild(now)
        tr.appendChild(price)
        tr.appendChild(count)
        
        
        table.appendChild(tr)
    }

    setListHeader(table){
        
        const tr = document.createElement('tr');
        const th = document.createElement('th');
        const price = document.createElement('td'); 
        const count = document.createElement('td');
        const now = document.createElement('td');
        const total = document.createElement('td');
        const nowTotal = document.createElement('td');
        const profit = document.createElement('td');
        th.scope = 'row'
        th.innerHTML = '종목명'
        price.innerHTML = '매수가격'
        count.innerHTML =  '수량'
        now.innerHTML =  '현재가격'
        nowTotal.innerHTML =  '현재가격총합'
        total.innerHTML = '매수가격총합'
        profit.innerHTML =  '수익'
        
        tr.appendChild(th)
        tr.appendChild(profit)
        tr.appendChild(nowTotal)
        tr.appendChild(total)
        tr.appendChild(now)
        tr.appendChild(price)
        tr.appendChild(count)
        
        
        table.appendChild(tr)
    }


    render(){   

    
        this.content.innerHTML = ''
        
        if (this.data.name == 'home'){

        const index = document.createElement('div')


        new Card({
            $target : index,
            data : {id : 'feargreed' ,name : '' , url :'https://money.cnn.com/registry/html/.element/img/8.0/data/feargreed/1.png'}
        })

        new Card({
            $target : index,
            data : {id : 2 ,name : '' , url :'https://alternative.me/crypto/fear-and-greed-index.png'}
        })
        
        const graph = document.createElement('div')
        const nasdaq = document.createElement('iframe');
        nasdaq.src = '//tvcharts.investing.com/init.php?&carrier=4514a7c0ea00d6885dce8de9a7b60e0f&time=1573560994&domain_ID=1&lang_ID=1&timezone_ID=8&pair_ID=14958&interval=86400&refresh=4&session=24x7&client=&user=guest&width=650&height=750&init_page=instrument&m_pids=&watchlist=&site=https://www.investing.com'
        nasdaq.style="display: block; width: 500px; height: 350px;"
        
        graph.appendChild(nasdaq)

        this.content.appendChild(index)
        this.content.appendChild(graph)
        
        }
        else if(this.data.name == 'about'){

            const div = document.createElement('div');
            const table = document.createElement('table');
            table.className = 'type04'

            this.setListHeader(table)
            
            this.data.data.forEach(e => {
                this.setList(table,e)
            });

            div.appendChild(table)
            this.content.appendChild(div)
            
        }

    }
}