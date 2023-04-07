const qrcode = require('qrcode-terminal');
const { Client,LocalAuth,MessageMedia } = require('whatsapp-web.js');

const client = new Client({
  authStrategy: new LocalAuth()})
  
const data = require('./person.json')
const cron = require("node-cron");
const moment = require("moment")



function subtractMonths(date, months) {
    date.setMonth(date.getMonth() - months);
    return date;
  }
  let dateFormat1 = moment().format('DD-MM-YYYY');
console.log(dateFormat1); // 23-08-2022
  
//   ✅ Subtract 1 month from the current Date
  const result1 = subtractMonths(new Date(), 1);
  console.log(moment(result1).format('MMM')); //👉️ 2022-12-13T13:00:19.456Z



client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('Client is ready!');
    // for (let i = 0; i < Object.keys(data).length; i++) {
    //     const element = data[i];
    //     // console.log(element.FullNames+".pdf")
    //     // console.log(element.CodesTel.substring(1)+"@c.us")
    //     var phoneNumber=element.CodesTel.substring(1)+"@c.us"
        
    //     // client.sendMessage(phoneNumber,TextMessage)
    //     // client.sendMessage("85620"+element.tel+"@c.us",element.name+"\n"+element.salary.toLocaleString("en-US")+"\nສະບາຍດີ");
        client.sendMessage(phoneNumber,"ສະບາຍດີ "
         + element.FullNames + 
         "\n\nພວກເຮົາສົ່ງມາຈາກພະແນກບຸກຄະລາກອນ ບໍລິສັດ ໂອເຊຍໂນ ຈຳກັດ\n\nນີ້ແມ່ນເອກະສານໃບແຈ້ງຍອດລວມເງິນເດືອນປະຈຳເດືອນ "
         + moment(result1).format('MM') 
         + "\n\nຖ້າມີຂໍ້ມູນໃດບໍ່ຖືກຕ້ອງ ກະລຸນາແຈ້ງຂໍ້ມູນປະໄວ້ກ່ອນ ແລ້ວທາງຝ່າຍເຮົາຈະໃຫ້ຄຳຕອບໃນໄວໆນີ້ \nໝາຍເຫດ: ກະລຸນາກວດເລກບັນຊີຂອງທ່ານໃນເອກະສານຕິດຂັດ ເພື່ອຫຼີກລ້ຽງການເກີດຂໍ້ຜິດພາດໃນການໂອນຈ່າຍ\nຂໍຂອບໃຈ");
    //     const attachmentPdf = MessageMedia.fromFilePath("salary/"+element.FullNames+".pdf");
    //     client.sendMessage(phoneNumber, attachmentPdf); 
    //     console.log(i+1+"."+phoneNumber)
    //   }
});

client.initialize();
