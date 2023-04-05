/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


let  villagers = [
    {
        "name": "Raymond",
        "rank": "1st",
        "type": "Cat",
        "personality": "Smug",
        "gender": "Male",
        "starsign": "Libra",
        "profile_image":"topten/raymond.png"
    },
    {
        "name": "Marshal",
        "rank": "2nd",
        "type": "Squirrel",
        "personality": "Smug",
        "gender": "Male",
        "starsign": "Libra",
        "profile_image":"topten/marshal.png"
    },
    {
        "name": "Marina",
        "rank": "3rd",
        "type": "Octopus",
        "personality": "Normal",
        "gender": "Female",
        "starsign": "Cancer",
        "profile_image":"topten/marina.png"
    },
    {
        "name": "Bangle",
        "rank": "4th",
        "type": "Tiger",
        "personality": "Peppy",
        "gender": "Female",
        "starsign": "Virgo",
        "profile_image":"topten/bangle.png"
    },
    {
        "name": "Zucker",
        "rank": "5th",
        "type": "Octopus",
        "personality": "Lazy",
        "gender": "Male",
        "starsign": "Pisces",
        "profile_image":"topten/zucker.png"
    },
    {
        "name": "Bob",
        "rank": "6th",
        "type": "Cat",
        "personality": "Lazy",
        "gender": "Male",
        "starsign": "Capricorn",
        "profile_image":"topten/bob.png"
    },
    {
        "name": "Sherb",
        "rank": "7th",
        "type": "Goat",
        "personality": "Lazy",
        "gender": "Male",
        "starsign": "Capricorn",
        "profile_image":"topten/sherb.png"
    },
    {
        "name": "Beau",
        "rank": "8th",
        "type": "Deer",
        "personality": "Lazy",
        "gender": "Male",
        "starsign": "Aries",
        "profile_image":"topten/beau.png"
    },
    {
        "name": "Audie",
        "rank": "9th",
        "type": "Wolf",
        "personality": "Peppy",
        "gender": "Female",
        "starsign": "Virgo",
        "profile_image":"topten/audie.png"
    },
    {
        "name": "Fauna",
        "rank": "10th",
        "type": "Deer",
        "personality": "Normal",
        "gender": "Female",
        "starsign": "Aries",
        "profile_image":"topten/fauna.png"
    }
]

function viewJSONData()
{
    let htmlString = `<table>`

    villagers.map(villagers =>
    {
        htmlString += `<tr>
                           <td>${villagers.name}</td>
                           <td>${villagers.rank}</td>
                           <td>${villagers.type}</td>
                           <td>${villagers.personality}</td>
                           <td>${villagers.gender}</td>
                           <td>${villagers.starsign}</td>
                           <td>${villagers.profile_image}</td>
                       </tr>`
    })
            
    htmlString += `</table><br>
                   ${villagers.length} items found.`
    document.getElementById("villagers").innerHTML = htmlString
}