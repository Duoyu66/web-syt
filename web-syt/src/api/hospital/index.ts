import request from "@/utils/request.ts";
enum API{
    HOSPITALDETAIL_URL='/hosp/hospital'
}
export const reqHospitalDetail=(hoscode)=>request.get(API.HOSPITALDETAIL_URL+"/"+hoscode)

