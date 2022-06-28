
class Club{
    constructor(clubName,clubType,membAmt){
        this.clubName =clubName
        this.clubType     =clubType
        this.membAmt  =membAmt
  
    }
}

class Contact{
    constructor(contactName,contactAddress,phNo){
        this.contactName    =contactName
        this.contactAddress =contactAddress
        this.phNo           =phNo
    }
}


clubClient_A =[new Club('Café de Bruuijne Schnorr','Café','64',Contact),new Contact('Bruno Lub','Kanaalstraat 15','0251234567')]
clubClient_B =[new Club('De Geile Goudvis','"disco"','69', Contact),(new Contact('Bruno Lub','Kanaalstraat 15','0208708807'))]
clubClient_C =[new Club('AFC Ajax','Voetbalclub','125.000',Contact),(new Contact('Henk Ooligan','Leidseplein 27','0208572847'))]
clubClient_D =[new Club('Firm Rodding','Visclub','1759', Contact),(new Contact('Kees Visser','Snoeksteeg 33','0307818395'))]
clubClient_E =[new Club('Nooit Geschoten','Schietvereniging','250'),(new Contact('S. Inderoos','Schutterssteeg 99','0209739574'))]

const clubArray =[clubClient_A,clubClient_B,clubClient_C,clubClient_D,clubClient_E]
               
console.log(clubClient_A)
console.log(clubClient_B)
console.log(clubClient_C)
console.log(clubClient_D)
console.log(clubClient_E)

console.log(clubArray)
console.log(clubClient_D)
console.log(clubClient_E)

console.log(clubClient_D[0])
console.log(clubClient_D[1])
console.log(clubClient_E[0])
console.log(clubClient_E[1])

console.log(clubClient_E[0].clubName)
console.log(clubClient_E[0].clubType)
console.log(clubClient_E[0].membAmt)
console.log(clubClient_E[1].contactName)
console.log(clubClient_E[1].contactAddress)
console.log(clubClient_E[1].phNo)

clubClient_D.push(clubClient_D[1].phNo = 'defunct number, upd req')
    
    console.log(clubClient_D)

for (let club in clubArray) {
    console.log(clubArray[club])
}
