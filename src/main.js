import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { myFunction } from './counter.js'

const array = [2,3,4,5,6,7,8,9]
let ans=myFunction(array)


document.querySelector('#app').innerHTML = `
  <div>
    <div class="card">
       <p/> your even sum is ${ans}</p>
      
    </div>
  </div>
  </div>
`


setupCounter(document.querySelector('#counter'))
