import {MobilesList} from "./MobilesList.js";

MobilesList.map((item, i)=>{
    // Connectivity Value assign variables
    let network = '';
    let sim = '';
    let wlan = '';
    let bluetooth = '';
    // Body Value assign variables
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

    let mobiles = `${item.name}\n Price: ${item.price}\n colors: ${item.colors}\n Connectivity:-\n Network: ${network}\n SIM: ${sim}\n WLAN: ${wlan}\n Bluetooth: ${bluetooth}\n Body:-\n Style: ${style}\n Material: ${material}\n Weight: ${weight}\n
    `;
    console.log(mobiles)
})