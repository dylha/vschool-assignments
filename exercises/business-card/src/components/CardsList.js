import React from 'react';
import Card from "./Cards";
import data from "./contacts";

function Cards(props) {
    return (
        let cardsList = [
            {
                "img": "https://i.stack.imgur.com/mA6D0.png",
                "name": "JOHNNY",
                "num": "(480)-HEY-DUDE"
            },
            {
                "img": "http://vignette2.wikia.nocookie.net/2007scape/images/1/1b/Rune_armour_set_%28lg%29_equipped.png/revision/latest?cb=20170122153247",
                "name": "NONNIE",
                "num": "(571)-I'M-UHHH"
            },
            {
                "img": "https://vignette4.wikia.nocookie.net/2007scape/images/e/e5/Ancient_mace_equipped.png/revision/latest?cb=20160219060654",
                "name": "RONNIE",
                "num": "(310)-TRM-MING"
            },
            {
                "img": "http://vignette4.wikia.nocookie.net/2007scape/images/e/e8/Skeletal_armour_equipped.png/revision/latest?cb=20160804114302",
                "name": "CHLOE",
                "num": "(703)-ARM-OURS"
            },
            {
                "img": "https://vignette.wikia.nocookie.net/2007scape/images/9/9c/Katrine.png/revision/latest?cb=20170420210804",
                "name": "ZOE",
                "num": "(801)-FOR-FREE"
            },
            {
                "img": "http://vignette2.wikia.nocookie.net/2007scape/images/1/1b/White_elegant_clothing_equipped.png/revision/latest?cb=20160727032536",
                "name": "JOEY",
                "num": "(518)-NOT-SCAM"
            }
        ]


        let mappedCardsList = cardsList.map((contact), => {
            return <Card
                    name = {contact.img}
                    name = {contact.name}
                    name = {contact.num}

            />
        });

        <div>
            {mappedCardsList}
        </div>
    )
}

export default CardsList;
