import {defineStore} from "pinia";
import {reqHospitalDeparment, reqHospitalDetail} from "@/api/hospital";
const useDetailStore = defineStore('Detail',{
    state:()=>{
        return {
           //医院详情的数据
           hospitalInfo:[],
            //科室数组
            deparmentArr:[]
        }
    },
    actions:{

        //获取医院详情
       async getHospital(hoscode){
         let result =  await reqHospitalDetail(hoscode)
           this.hospitalInfo = result.data
        },
        //获取科室列表
        async getHospitalList(hoscode){
            let result =  await reqHospitalDeparment(hoscode)
            this.deparmentArr = result.data
        }
    },
    getters:{}
})
export default useDetailStore
