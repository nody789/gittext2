// 空氣品質指標
let allData = [
    {
        SiteName: "汐止",
        County: "新北市",
        AQI: "26",
        Pollutant: "",
        Status: "良好",
        SO2: "1.5",
        CO: "0.19",
        CO_8hr: "0.2",
        O3: "29.6",
        O3_8hr: "28",
        PM10: "5",
        PM2_5: "4",
        NO2: "8.6",
        NOx: "10.5",
        NO: "1.9",
        WindSpeed: "3.1",
        WindDirec: "51",
        PublishTime: "2020/12/18 22:00:00",
        PM2_5_AVG: "5",
        PM10_AVG: "7",
        SO2_AVG: "2",
        Longitude: "121.6423",
        Latitude: "25.067131",
        SiteId: "2",
        ImportDate: "2020-12-18 22:45:01.077000"
    },
    {
        SiteName: "萬里",
        County: "新北市",
        AQI: "41",
        Pollutant: "",
        Status: "良好",
        SO2: "2.4",
        CO: "0.15",
        CO_8hr: "0.2",
        O3: "43.3",
        O3_8hr: "44",
        PM10: "33",
        PM2_5: "3",
        NO2: "1.9",
        NOx: "1.9",
        NO: "0.3",
        WindSpeed: "7.2",
        WindDirec: "28",
        PublishTime: "2020/12/18 22:00:00",
        PM2_5_AVG: "6",
        PM10_AVG: "34",
        SO2_AVG: "2",
        Longitude: "121.689881",
        Latitude: "25.179667",
        SiteId: "3",
        ImportDate: "2020-12-18 22:45:01.077000"
    },
    {
        SiteName: "新店",
        County: "新北市",
        AQI: "23",
        Pollutant: "",
        Status: "良好",
        SO2: "3.1",
        CO: "0.33",
        CO_8hr: "0.4",
        O3: "24.8",
        O3_8hr: "25",
        PM10: "5",
        PM2_5: "1",
        NO2: "15.3",
        NOx: "17.3",
        NO: "2",
        WindSpeed: "1.1",
        WindDirec: "67",
        PublishTime: "2020/12/18 22:00:00",
        PM2_5_AVG: "5",
        PM10_AVG: "5",
        SO2_AVG: "2",
        Longitude: "121.537778",
        Latitude: "24.977222",
        SiteId: "4",
        ImportDate: "2020-12-18 22:45:01.077000"
    },
    {
        SiteName: "土城",
        County: "新北市",
        AQI: "22",
        Pollutant: "",
        Status: "良好",
        SO2: "1.7",
        CO: "0.37",
        CO_8hr: "0.6",
        O3: "25.8",
        O3_8hr: "14",
        PM10: "5",
        PM2_5: "3",
        NO2: "13",
        NOx: "13.9",
        NO: "0.8",
        WindSpeed: "1.4",
        WindDirec: "156",
        PublishTime: "2020/12/18 22:00:00",
        PM2_5_AVG: "7",
        PM10_AVG: "11",
        SO2_AVG: "2",
        Longitude: "121.451861",
        Latitude: "24.982528",
        SiteId: "5",
        ImportDate: "2020-12-18 22:45:01.077000"
    },
    {
        SiteName: "板橋",
        County: "新北市",
        AQI: "30",
        Pollutant: "",
        Status: "良好",
        SO2: "1.6",
        CO: "0.52",
        CO_8hr: "0.9",
        O3: "14.7",
        O3_8hr: "9",
        PM10: "10",
        PM2_5: "6",
        NO2: "26",
        NOx: "30.5",
        NO: "4.5",
        WindSpeed: "1.3",
        WindDirec: "94",
        PublishTime: "2020/12/18 22:00:00",
        PM2_5_AVG: "9",
        PM10_AVG: "17",
        SO2_AVG: "2",
        Longitude: "121.458667",
        Latitude: "25.012972",
        SiteId: "6",
        ImportDate: "2020-12-18 22:45:01.077000"
    },
    {
        SiteName: "新莊",
        County: "新北市",
        AQI: "28",
        Pollutant: "",
        Status: "良好",
        SO2: "2.4",
        CO: "0.9",
        CO_8hr: "0.7",
        O3: "2.2",
        O3_8hr: "10",
        PM10: "14",
        PM2_5: "6",
        NO2: "26.9",
        NOx: "39.8",
        NO: "12.9",
        WindSpeed: "0.5",
        WindDirec: "219",
        PublishTime: "2020/12/18 22:00:00",
        PM2_5_AVG: "9",
        PM10_AVG: "15",
        SO2_AVG: "3",
        Longitude: "121.4325",
        Latitude: "25.037972",
        SiteId: "7",
        ImportDate: "2020-12-18 22:45:01.077000"
    },
    {
        SiteName: "菜寮",
        County: "新北市",
        AQI: "29",
        Pollutant: "",
        Status: "良好",
        SO2: "1.5",
        CO: "0.65",
        CO_8hr: "0.6",
        O3: "8.3",
        O3_8hr: "15",
        PM10: "10",
        PM2_5: "9",
        NO2: "28.2",
        NOx: "34.7",
        NO: "6.5",
        WindSpeed: "0.8",
        WindDirec: "154",
        PublishTime: "2020/12/18 22:00:00",
        PM2_5_AVG: "9",
        PM10_AVG: "16",
        SO2_AVG: "2",
        Longitude: "121.481028",
        Latitude: "25.06895",
        SiteId: "8",
        ImportDate: "2020-12-18 22:45:01.077000"
    },
    {
        SiteName: "林口",
        County: "新北市",
        AQI: "31",
        Pollutant: "",
        Status: "良好",
        SO2: "",
        CO: "0.18",
        CO_8hr: "0.2",
        O3: "35.9",
        O3_8hr: "33",
        PM10: "5",
        PM2_5: "2",
        NO2: "3.4",
        NOx: "4.4",
        NO: "1",
        WindSpeed: "3",
        WindDirec: "41",
        PublishTime: "2020/12/18 22:00:00",
        PM2_5_AVG: "2",
        PM10_AVG: "5",
        SO2_AVG: "",
        Longitude: "121.376869",
        Latitude: "25.077197",
        SiteId: "9",
        ImportDate: "2020-12-18 22:45:01.077000"
    },
    {
        SiteName: "淡水",
        County: "新北市",
        AQI: "31",
        Pollutant: "",
        Status: "良好",
        SO2: "2.1",
        CO: "0.19",
        CO_8hr: "0.2",
        O3: "34.9",
        O3_8hr: "34",
        PM10: "5",
        PM2_5: "3",
        NO2: "3.7",
        NOx: "4.2",
        NO: "0.5",
        WindSpeed: "",
        WindDirec: "",
        PublishTime: "2020/12/18 22:00:00",
        PM2_5_AVG: "5",
        PM10_AVG: "7",
        SO2_AVG: "2",
        Longitude: "121.449239",
        Latitude: "25.1645",
        SiteId: "10",
        ImportDate: "2020-12-18 22:45:01.077000"
    },
    {
        SiteName: "三重",
        County: "新北市",
        AQI: "54",
        Pollutant: "細懸浮微粒",
        Status: "普通",
        SO2: "3.2",
        CO: "1.85",
        CO_8hr: "2.3",
        O3: "-",
        O3_8hr: "-",
        PM10: "16",
        PM2_5: "10",
        NO2: "34.1",
        NOx: "104",
        NO: "69.9",
        WindSpeed: "-",
        WindDirec: "-",
        PublishTime: "2020/12/18 22:00:00",
        PM2_5_AVG: "17",
        PM10_AVG: "25",
        SO2_AVG: "4",
        Longitude: "121.493806",
        Latitude: "25.072611",
        SiteId: "67",
        ImportDate: "2020-12-18 22:45:01.077000"
    },
    {
        SiteName: "永和",
        County: "新北市",
        AQI: "21",
        Pollutant: "",
        Status: "良好",
        SO2: "1.6",
        CO: "0.44",
        CO_8hr: "0.7",
        O3: "24.7",
        O3_8hr: "19",
        PM10: "5",
        PM2_5: "3",
        NO2: "13.2",
        NOx: "18.8",
        NO: "5.6",
        WindSpeed: "2.2",
        WindDirec: "77",
        PublishTime: "2020/12/18 22:00:00",
        PM2_5_AVG: "7",
        PM10_AVG: "12",
        SO2_AVG: "2",
        Longitude: "121.516306",
        Latitude: "25.017",
        SiteId: "70",
        ImportDate: "2020-12-18 22:45:01.077000"
    },
    {
        SiteName: "富貴角",
        County: "新北市",
        AQI: "40",
        Pollutant: "",
        Status: "良好",
        SO2: "0",
        CO: "0.14",
        CO_8hr: "0.1",
        O3: "42.3",
        O3_8hr: "43",
        PM10: "27",
        PM2_5: "7",
        NO2: "0.7",
        NOx: "1.1",
        NO: "0.3",
        WindSpeed: "10.7",
        WindDirec: "73",
        PublishTime: "2020/12/18 22:00:00",
        PM2_5_AVG: "6",
        PM10_AVG: "27",
        SO2_AVG: "0",
        Longitude: "121.54738",
        Latitude: "25.29228",
        SiteId: "84",
        ImportDate: "2020-12-18 22:45:01.077000"
    },
    {
        SiteName: "樹林",
        County: "新北市",
        AQI: "39",
        Pollutant: "",
        Status: "良好",
        SO2: "0.5",
        CO: "0.38",
        CO_8hr: "0.6",
        O3: "16.6",
        O3_8hr: "8",
        PM10: "-",
        PM2_5: "10",
        NO2: "21.2",
        NOx: "30.7",
        NO: "9.5",
        WindSpeed: "0.3",
        WindDirec: "118",
        PublishTime: "2020/12/18 22:00:00",
        PM2_5_AVG: "12",
        PM10_AVG: "-",
        SO2_AVG: "1",
        Longitude: "121.38352778",
        Latitude: "24.94902778",
        SiteId: "311",
        ImportDate: "2020-12-18 22:45:01.077000"
    }
]
//dom元素
let list =document.querySelector('.list');
let title = document.querySelector('.title');
let main = document.querySelector('.main');

//監聽 
list.addEventListener('change',updateTitle);
list.addEventListener('change',updateContent)
updateMenu()

//select 
function updateMenu(){
   let allSite=[];
   for(let i=0; i<allData.length; i++){
      allSite.push(allData[i].SiteName);
   };
   let str ='';
   str+=`<option value="" disabled selected hidden>請選擇行政區域</option>`
   for(let i=0; i<allData.length; i++){
     str+=`<option value="${allSite[i]}">${allSite[i]}</option>`
   }
   list.innerHTML=str;
}

// 地區標題
function updateTitle(e){
 let select = e.target.value;
 let titleStr ='';
 for(let i=0; i<allData.length; i++){
  if(select===allData[i].SiteName){
     titleStr = allData[i].SiteName;
  };
 };
 title.innerHTML=titleStr;
}


//內容 字串
function updateContent(e){
    let select = e.target.value;
    let contentStr ='';
    for(let i=0; i<allData.length; i++){
     if(select===allData[i].SiteName){
      contentStr+=`
           <div class='bg'>
           <span class='statusId'>${allData[i].Status}</span>
           </div>
           <ul class='detail'>
            <li class='aqiTitle'>空氣品質指標:${allData[i].AQI}</li>
            <li class='coId'>一氧化碳:${allData[i].CO}</li>
            <li class='O3Id'>臭氧(ppb):${allData[i].O3}</li>
            <li class='WindSpeedId'>風速(m/sec):${allData[i].WindSpeed}</li>
            <li class='winddirecId>空氣品質指標:${allData[i].WindDirec}</li>
           </ul>
      `    };
    }
   main.innerHTML=contentStr;
}