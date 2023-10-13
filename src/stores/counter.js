import { ref } from 'vue';
import { defineStore } from 'pinia'

export const Travel_listStore = defineStore('Travel_list', () => {

const travel_list  = ref([
  {name: ' อุทยานแห่งชาติเขาใหญ่', img:'http://www.trdnrru.net/databasetrdnrru/img/90676049320180826_125007.jpg',
    ip:'api.openweathermap.org/data/2.5/forecast?lat=14.439184&lon=101.372209&appid=66af6261484edc25c7b1b61803d7547c'},
  {name: 'วัดโนนกุ่ม', img:'http://www.trdnrru.net/databasetrdnrru/img/130517164920180826_124341.jpg',
    ip:'api.openweathermap.org/data/2.5/forecast?lat=14.87211&lon=101.73429&appid=66af6261484edc25c7b1b61803d7547c'},
  {name: 'สวนไดโนเสาร์', img:'http://www.navanurak.in.th/cultureskru/pic/thumbmuse/travelplace29/Thumb_2021-07-24_14-52-18_28828340_1719021884824133_529967268920246997_o.jpg',
    ip:'api.openweathermap.org/data/2.5/forecast?lat=6.5324076&lon=100.4054356&appid=66af6261484edc25c7b1b61803d7547c'},
  {name: 'สวนสัตว์สงขลา', img:'http://www.navanurak.in.th/cultureskru/pic/thumbmuse/travelplace26/Thumb_2021-07-24_14-44-41_8de9ed90-5568-11eb-8076-99bc85563eef_original.jpg',
    ip:'api.openweathermap.org/data/2.5/forecast?lat= 7.1429569 &lon=100.6021214&appid=66af6261484edc25c7b1b61803d7547c'},
  {name: 'หอดูดาว เฉลิมพระเกียรติ', img:'http://www.navanurak.in.th/cultureskru/pic/thumbmuse/travelplace21/Thumb_2021-07-24_14-29-18_pr20190726_01_11.jpg',
    ip:'api.openweathermap.org/data/2.5/forecast?lat= 7.1587364 &lon=100.6052567 &appid=66af6261484edc25c7b1b61803d7547c'},
  {name: 'บ้านนครใน', img:'http://www.navanurak.in.th/cultureskru/pic/thumbmuse/travelplace19/Thumb_2021-07-24_14-20-45_571f8ac299dd92bb057e3a3f33206de9.jpg',
    ip:'api.openweathermap.org/data/2.5/forecast?lat=7.1968161&lon=100.5878031 &appid=66af6261484edc25c7b1b61803d7547c'},
])

return { travel_list }
})