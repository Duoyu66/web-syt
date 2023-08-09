import request from "@/utils/request.ts";
enum API{
    HOSPITALDETAIL_URL='/hosp/hospital',
    HOSPITALDEPARMENT_URL = '/hosp/hospital/department/',
}
//详情信息
export const reqHospitalDetail=(hoscode)=>request.get(API.HOSPITALDETAIL_URL+"/"+hoscode)
//获取科室列表
//获取医院科室的接口
export const reqHospitalDeparment = (hoscode: string) => request.get<any, DeparmentResponseData>(API.HOSPITALDEPARMENT_URL + hoscode);
