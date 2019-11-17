import Axios from "axios";
//URI Gak perlu pake http://localhost:8080 soalnya udah di set di src/setupProxy biar gak kena CORS error
const wsdlURI = "/bankpro";

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
    console.log(e);
  }
}
