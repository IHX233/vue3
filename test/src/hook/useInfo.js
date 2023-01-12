import {reactive,onMounted} from 'vue'
export default function(){
    let gf = reactive({
        aihao:'game',
        work:'code'
    })
    function change(){
        console.log(1)
        gf.aihao = 'study',
        gf.work = 'ui'
    };
    onMounted(()=>{
        console.log(1)
    })
    return {gf,change}
}