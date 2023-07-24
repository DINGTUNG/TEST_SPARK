import {
  defineStore
} from 'pinia';

import { reactive } from 'vue';



const memberData = reactive(
  {
    memId:"A001",
    name:"蔡頭瓜",
    enName:"Tougua",
    companyName:"-",
    gui:"-" ,
    id:"H123234345",
    address:"320桃園市中壢區復興路46號9樓",
    email:"tougua@gmail.com",
    mobile:"0912323434",
    tel:"-",
    businessPhone:"03-425-1108",
    account:"tougua@gmail.com"
  }
)


export const useMemberDataStore = defineStore('member-data', () => {


  return {
    memberData


  }


})