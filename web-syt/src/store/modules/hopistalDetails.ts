import {defineStore} from "pinia";
import {reqHospitalDetail} from "@/api/hospital";
const useDetailStore = defineStore('Detail',{
    state:()=>{
        return {
           //医院详情的数据
           hospitalInfo:[]
        }
    },
    actions:{
       async getHospital(hoscode){
         let result =  await reqHospitalDetail(hoscode)
           this.hospitalInfo = result
        }
    },
    getters:{}
})
export default useDetailStore
