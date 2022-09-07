import {MobilesList} from "./MobilesList.js";

MobilesList.map((item, i)=>{
    // Connectivity Value assign variable
    let network = '';
    let sim = '';
    let wlan = '';
    let bluetooth = '';
    // Body Value assign variable
    let style = '';
    let material = '';
    let weight = ''

    item.connectivity.map((connectivityValue, connectivityIndex)=>{
        network += connectivityValue.network;
        sim += connectivityValue.sim;
        wlan += connectivityValue.wlan;
        bluetooth += connectivityValue.bluetooth;
    });
    item.body.map((bodyValue, bodyIndex)=>{
        style += bodyValue.style;
        material += bodyValue.material;
        weight += bodyValue.weight;
    })
    // let mobileValue = `Name: ${item.name},\n colors: ${item.colors},\n Connectivity:-\n Network: ${network}\n SIM: ${sim}\n WLAN: ${wlan}\n Bluetooth: ${bluetooth}\n Body:-\n Style: ${style}\n Material: ${material}\n Weight: ${weight} \n\n`;

    let mobileValue = `${item.name}\n colors: ${item.colors}\n Connectivity:- Network: ${network}\n SIM: ${sim}\n WLAN: ${wlan}\n Bluetooth: ${bluetooth}\n Body:- Style: ${style}\n Material: ${material}\n Weight: ${weight}\n
    `;
    console.log(mobileValue)
})