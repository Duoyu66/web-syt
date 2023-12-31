import request from "@/utils/request";
import type {HospitalResponseData,} from "@/api/home/types";
//通过枚举管理首页模块的接口地址
enum API{
//    获取已有的医院的数据接口地址
    HOSPITAL_URL='/hosp/hospital',
    //获取医院的等级与地区接口
    HOSPITALLEVELANDREGION_URL='/cmn/dict/findByDictCode/',
    HOSPITALINFO_URL = 'hosp/hospital/findByHosname'
//////
}
//获取页面的数据
export const reqHospital = (page:number,limit:number,hostype:any,districtCode:any)=>request.get<any,HospitalResponseData>(API.HOSPITAL_URL+`/${page}/${limit}?hostype=${hostype}&districtCode=${districtCode}`)
//获取医院的等级或者医院地区的数据
export const reqHospitalLevelAndRegion = (dictCode:string)=>request.get(API.HOSPITALLEVELANDREGION_URL+dictCode)

//根据关键字获取医院的数据进行展示
export  const reqHospitalInfo=(hosname:string)=>request.get(API.HOSPITALINFO_URL+"/"+hosname)
