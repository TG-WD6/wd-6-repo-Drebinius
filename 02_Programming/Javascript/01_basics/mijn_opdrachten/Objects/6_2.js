class Contact{
    constructor(contactName,contactAddress,contactPhNo){
        this.contactName    =contactName
        this.contactAddress =contactAddress
        this.contactPhNo    =contactPhNo
    }
}
class Club{
    constructor(clubName,clubType,clubMbrAmt,Contact){
        this.clubName   =clubName
        this.clubType   =clubType
        this.clubMbrAmt =clubMbrAmt
        this.Contact    =Contact
    }
}

const contactArray =[
client_AContact =new Contact('Mister Fister','Bendoverlaan 194','0251234567'),
client_BContact =new Contact('Bruno Lub','Kanaalstraat 15','0208708807'),
client_CContact =new Contact('Henk Ooligan','Leidseplein 27','0208572847'),
client_DContact =new Contact('Kees Visser','Snoeksteeg 33','0307818395'),
client_EContact =new Contact('S. Inderoos','Schutterssteeg 99','0209739574')
];console.log(contactArray)

const clubArray =[
clubClient_A =new Club('Café de Bruuijne Schnørr','Café','124',client_AContact),
clubClient_B =new Club('De Geile Goudvis','"disco"','469',client_BContact),
clubClient_C =new Club('AFC Ajax','Voetbalclub','125.000',client_CContact),
clubClient_D =new Club('Firm Rodding','Visclub','8708',client_DContact),
clubClient_E =new Club('Altijd Mis','Schietvereniging','180',client_EContact)
];console.log(clubArray)

    console.log(clubClient_A)
    console.log(clubClient_B)
    console.log(clubClient_C)
    console.log(clubClient_D)
    console.log(clubClient_E)

    console.log(clubClient_D)
    console.log(clubClient_D.Contact)


////this updates contact phone number///////
contactArray.push(client_AContact.contactPhNo='Defunct, please inquire')
    console.log(client_AContact.contactPhNo)
    console.log(clubClient_A.Contact)
    console.log(clubClient_A)
///////////////////////////////////////////////

clubClient_C.Contact = client_DContact  //updates club C's contact to be club D's
    console.log(clubClient_C)
contactArray.push(clubClient_C.Contact.contactPhNo= '0208572847')//updates club C's new contact's number to be different from his number as contact of club D
    console.log(clubClient_C)
console.log("---------------------log the other clubs' contact--------------------------")   
    console.log(client_CContact)
    
    
console.log('--------------------final club array---------------------------')
    console.log(clubArray)


// console.log(clubClient_E)
// console.log(clubClient_E.clubName)
// console.log(clubClient_E.clubType)
// console.log(clubClient_E.clubMbrAmt)
// console.log(clubClient_E.Contact.contactName)
// console.log(clubClient_E.Contact.contactAddress)
// console.log(clubClient_E.Contact.contactPhNo)

//  clubClient_E.shift(clubClient_EContact.contactPhNo)
//  clubClient_E.push(clubClient_EContact.contactPhNo = 'defunct number, upd req')
//         console.log(clubClient_EContact)
//         console.log(clubClient_E)






//////////////////////


// class Club{
//     constructor(clubName,clubType,clubMbrAmt){
//         this.clubName =clubName
//         this.clubType     =clubType
//         this.clubMbrAmt  =clubMbrAmt
  
//     }
// }

// class Contact{
//     constructor(contactName,contactAddress,contactPhNo){
//         this.contactName    =contactName
//         this.contactAddress =contactAddress
//         this.contactPhNo           =contactPhNo
//     }
// }


// clubClient_A =[new Club('Café de Bruuijne Schnorr','Café','64',Contact),new Contact('Bruno Lub','Kanaalstraat 15','0251234567')]
// clubClient_B =[new Club('De Geile Goudvis','"disco"','69', Contact),(new Contact('Bruno Lub','Kanaalstraat 15','0208708807'))]
// clubClient_C =[new Club('AFC Ajax','Voetbalclub','125.000',Contact),(new Contact('Henk Ooligan','Leidseplein 27','0208572847'))]
// clubClient_D =[new Club('Firm Rodding','Visclub','1759', Contact),(new Contact('Kees Visser','Snoeksteeg 33','0307818395'))]
// clubClient_E =[new Club('Nooit Geschoten','Schietvereniging','250'),(new Contact('S. Inderoos','Schutterssteeg 99','0209739574'))]

// const clubArray =[clubClient_A,clubClient_B,clubClient_C,clubClient_D,clubClient_E]
               
// console.log(clubClient_A)
// console.log(clubClient_B)
// console.log(clubClient_C)
// console.log(clubClient_D)
// console.log(clubClient_E)

// console.log(clubArray)
// console.log(clubClient_D)
// console.log(clubClient_E)

// console.log(clubClient_D[0])
// console.log(clubClient_D[1])
// console.log(clubClient_E[0])
// console.log(clubClient_E[1])

// console.log(clubClient_E[0].clubName)
// console.log(clubClient_E[0].clubType)
// console.log(clubClient_E[0].clubMbrAmt)
// console.log(clubClient_E[1].contactName)
// console.log(clubClient_E[1].contactAddress)
// console.log(clubClient_E[1].contactPhNo)

// clubClient_D.push(clubClient_D[1].contactPhNo = 'defunct number, upd req')
//         console.log(clubClient_D)

// for (let club in clubArray) {
//     console.log(clubArray[club])
// }


//////////////////////////////2nd itera///////////////////////////////////////////////


// class Contact{
//     constructor(contactName,contactAddress,contactPhNo){
//         this.contactName    =contactName
//         this.contactAddress =contactAddress
//         this.contactPhNo           =contactPhNo
//     }
// }

// class Club{
//     constructor(clubName,clubType,clubMbrAmt){
//         this.clubName =clubName
//         this.clubType     =clubType
//         this.clubMbrAmt  =clubMbrAmt
  
//     }
// }



// const clubClient_A =[new Club('Café de Bruuijne Schnorr','Café','124'),clubClient_AContact =new Contact('Bruno Lub','Kanaalstraat 15','0251234567')]
// const clubClient_B =[new Club('De Geile Goudvis','"disco"','469'),clubClient_BContact =new Contact('Bruno Lub','Kanaalstraat 15','0208708807')]
// const clubClient_C =[new Club('AFC Ajax','Voetbalclub','125.000'),clubClient_CContact =new Contact('Henk Ooligan','Leidseplein 27','0208572847')]
// const clubClient_D =[new Club('Firm Rodding','Visclub','8708'),clubClient_DContact =new Contact('Kees Visser','Snoeksteeg 33','0307818395')]
// const clubClient_E =[new Club('Altijd Mis','Schietvereniging','180'),clubClient_EContact =new Contact('S. Inderoos','Schutterssteeg 99','0209739574')]

             
// console.log(clubClient_A)
// console.log(clubClient_B)
// console.log(clubClient_C)
// console.log(clubClient_D)
// console.log(clubClient_E)

// console.log(clubClient_D)
// console.log(clubClient_D[0])
// console.log(clubClient_D[1])


// console.log(clubClient_E[0])
// console.log(clubClient_E[1])
// console.log(clubClient_E[0].clubName)
// console.log(clubClient_E[0].clubType)
// console.log(clubClient_E[0].clubMbrAmt)
// console.log(clubClient_E[1].contactName)
// console.log(clubClient_E[1].contactAddress)
// console.log(clubClient_E[1].contactPhNo)

//  clubClient_E.shift(clubClient_EContact.contactPhNo)
//  clubClient_E.push(clubClient_EContact.contactPhNo = 'defunct number, upd req')
//         console.log(clubClient_EContact)
//         console.log(clubClient_E)

// // const clubArray =[clubClient_A,clubClient_B,clubClient_C,clubClient_D,clubClient_E]

// for (const Club in clubArray){
// }
