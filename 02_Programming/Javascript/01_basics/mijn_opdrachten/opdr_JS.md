# Opdrachten JS

## Variables & Datatypes - Opdrachten
____
### Opdracht 1.1.
____
____
#### a)
**Verwachting:** Let tekst twee wordt in de console weergegeven

**Resultaat:** Let kan maar eenmalig gedeclared worden. er werd een error weergegeven. console geen output
***

#### b)
**Verwachting:** let tekst twee vervangt de eerste declaration

**Resultaat:** beiden decs worden in volgorde weergegeven
***

#### c)
**Verwachting:** const tekst 2 wordt niet doorgevoerd omdat dit een 'constant' dec probeert aan te passen
***

**Resultaat:** const tekst wordt in de log weergegeven, const tekst 2 wordt niet doorgevoerd
***

#### d)
**Verwachting:** var decs worden weergegeven, niet zeker over de eerste zonder explicit dec

**Resultaat:** alles wordt weergegeven in de console

____
### Opdracht 1.2.
____
____
1. *Consolecius says*: This is a string, with the value: Number. 
    Dit is niet wat ik verwachtte. Het lijkt een functie te zijn om de datatype en value te identificeren.

2.  "Number" vervangen door de voorbeelden, lijkt idd een identifier te zijn

3.  1.  het getal 55 wordt in de console log weergegeven

    2.  beiden een nummer resulteert in verwerking als een optelsom
    
    3.  `==` : verandert in een vragende vergelijking(value) beantwoordt met false

        `===`: verandert in een vragende vergelijking(value/type) beantwoordt met false
        
        `!=` : vergelijkt of dit een ongelijke value is, en beantwoordt met boolean

        `!==`: vergelijkt of dit een ongelijke value/type is en beantwoordt met boolean

4.  1. resulteert beiden in "2". 

    2. resulteert in "1" en "3". let op verschil tussen pre- en post-fix.

    3. modulo deelt de variable door de tweede operand en noteert de restvalue.
    division is een normale breuk.

    4. *computer says no..* console geeft "false" weer.

    5. 5        : false

       Boolean  : false

       false    : true

       "false"  : false

       true     : false

       "true"   : false

       null     : true
       
       undefined: true

    6. `+=` voegt de volgende value toe aan de voorstaande, en herberekent daarna de (final)value. Deze werkt ook op strings.
    `x += y` kan langer geschreven worden  als `x = x + y`

    7.  `-=` :         aftrekken>herbereken

        `*=` :  vermenigvuldigen>herbereken

        `/=` :             delen>herbereken

        `%=` :         remainder>herbereken
        
        `**=`:  machtsverheffing>herbereken
____
 ### Opdracht 2.2
____
____

    1. waardes worden omgewisseld van hoog naar laag

    2. Geeft [empty string] weer

    3. lijkt de hele string te returnen

    4. 'telt' van rechts naar links
____
## Conditions - Opdrachten
____
### Opdracht 3.1.
____

1. `==` **equality**(for all) compare value en `===` **strict equality** compare value/type

2. `>` greater than. heeft left operand hogere value than right operand?
            `5 > 3=true`

    `>=` greater than or equal. heeft left operand gelijke/hogere value   dan right operand?
            `3 >= 3=true`

    `<` less than. heeft left operand een lagere value dan right operand?
            `3 < 5=true`

    `<=` less than or equal. heeft left operand een gelijke/lagere value dan right operand?
            `5 <= 3 =false`

____
### Opdracht 3.2.
____

1. zie script

2. #4 wordt niet herkend door de if/else. de larger than 4 overruled de larger than 11 als dit geldt voor het ingevoerde nummer

3. 