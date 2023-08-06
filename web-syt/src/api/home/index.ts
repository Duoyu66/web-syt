import request from "@/utils/request";
import type {HospitalResponseData} from "@/api/home/types";

//通过枚举管理首页模块的接口地址
enum API{
//    获取已有的医院的数据接口地址
    HOSPITAL_URL='/api/hosp/hospital'
}

//获取页面的数据
export const reqHospital = (page:number,limit:number)=>request.get<any,HospitalResponseData>(API.HOSPITAL_URL+`/${page}/${limit}`)