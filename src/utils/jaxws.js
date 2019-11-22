import Axios from "axios";
//URI Gak perlu pake http://localhost:8080 soalnya udah di set di src/setupProxy biar gak kena CORS error
const wsdlURI = "/services/bankpro";

export async function checkLoginCredentials(accNum) {
  // TODO: ganti hardcoded url (localhost) pas udah di deploy
  const config = {
    headers: {
      "Content-Type": "text/xml"
    }
  };
  const xmlContent = `
		<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:k03="http://K03G04Tubes2.org/">
			<soapenv:Header/>
				<soapenv:Body>
					<k03:isValidNasabahNumber>
							<account_num>${accNum}</account_num>
					</k03:isValidNasabahNumber>
				</soapenv:Body>
		</soapenv:Envelope>
  `;
  try {
    const res = await Axios.post(wsdlURI, xmlContent, config);
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(res.data, "text/xml");
    const isLoginValid = xmlDoc.getElementsByTagName("return")[0].innerHTML;
    return isLoginValid === "true";
  } catch (e) {
    console.log(e.stack);
  }
}

export async function doTransfer(fromAcc, toAcc, nom){
  const config={
    headers:{
      "Content-Type": "text/xml"
    }
  };
  const xmlContent = `
    <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:k03="http://K03G04Tubes2.org/">
      <soapenv:Header/>
      <soapenv:Body>
        <k03:createTransaksiTransfer>
          <account_num_pengirim>${fromAcc}</account_num_pengirim>
          <account_numorva_penerima>${toAcc}</account_numorva_penerima>
          <jlh_uang>${nom}</jlh_uang>
        </k03:createTransaksiTransfer>
      </soapenv:Body>
    </soapenv:Envelope>
  `;

  try{
    const res = await Axios.post(wsdlURI,xmlContent,config);
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(res.data,"text/xml");
    const result = xmlDoc.getElementsByTagName("return")[0].innerHTML;
    return result;
  } catch (e){
    console.log(e.stack);
    return "Error , probably 500 or 400 idk. Check in console";
  }
}


function createData(id, time, type, amount, account) {
	return { id, time, type, amount, account };
}

// const rows = [
// 	createData("1", "1.30", "debit", "-100000", "r-12345678"),
// 	createData("2", "1.45", "kredit", "+100000", "r-12345678"),
// 	createData("3", "5.30", "debit", "-100000", "r-12345678")
// ];


export async function getUserTransaction(accNum) {
  const config = {
    headers: {
      "Content-Type": "text/xml"
    }
  };
  const xmlContent = `
    <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:k03="http://K03G04Tubes2.org/">
      <soapenv:Header/>
      <soapenv:Body>
        <k03:getNasabah>
          <account_num>${accNum}</account_num>
      </k03:getNasabah>
    </soapenv:Body>
  </soapenv:Envelope>
  `;
  try {
    const res = await Axios.post(wsdlURI, xmlContent, config);
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(res.data, "text/xml");
    const dataTransaksi = xmlDoc.getElementsByTagName("transaction");
    const dataDate = xmlDoc.getElementsByTagName("date");
    const dataType = xmlDoc.getElementsByTagName("transactionType");
    const dataAmount = xmlDoc.getElementsByTagName("amount");
    const dataAccNum1 = xmlDoc.getElementsByTagName("sender");
    const dataAccNum2 = xmlDoc.getElementsByTagName("receiver"); 
    
    var arr = [];
    
    for (var i=0; i<dataTransaksi.length; i++) {
      if (dataType[i].innerHTML == "kredit") {
        arr.push(createData(i+1, dataDate[i].innerHTML, dataType[i].innerHTML, dataAmount[i].innerHTML, dataAccNum1[i].innerHTML));
      } else {
        arr.push(createData(i+1, dataDate[i].innerHTML, dataType[i].innerHTML, dataAmount[i].innerHTML, dataAccNum2[i].innerHTML));
      }
    }
    
    console.log(arr);
    return(arr);

  } catch (e) {
    console.log(e);
  }
}


// export async function getUserData(accNum) {
//   const config = {
//     headers: {
//       "Content-Type": "text/xml"
//     }
//   };
//   const xmlContent = `
//     <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:k03="http://K03G04Tubes2.org/">
//       <soapenv:Header/>
//       <soapenv:Body>
//         <k03:getNasabah>
//           <account_num>${accNum}</account_num>
//       </k03:getNasabah>
//     </soapenv:Body>
//   </soapenv:Envelope>
//   `;
//   try {
//     const res = await Axios.post(wsdlURI, xmlContent, config);
//     const parser = new DOMParser();
//     const xmlDoc = parser.parseFromString(res.data, "text/xml");
//     const dataDate = xmlDoc.getElementsByTagName("date");
//     const dataType = xmlDoc.getElementsByTagName("transactionType");
    
//     var arr = [];
//     arr.push(i+1, dataDate[i].innerHTML, dataType[i].innerHTML, dataAmount[i].innerHTML, dataAccNum[i].innerHTML);
    

//     console.log(arr[0])

    
//     console.log(arr);

//   } catch (e) {
//     console.log(e);
//   }
// }