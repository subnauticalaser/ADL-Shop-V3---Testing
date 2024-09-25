const applyTextToLarnM = function(t){
    // Use document.getElementById directly each time
    const j = document.getElementById('LearnMoreInfoBox');
    const e = document.getElementById('closeButton');
    const r = document.getElementById('textBody');

    j.style.visibility = `unset`;



    console.log(j, e, r)

    // Set the innerHTML of the element
    r.innerHTML = t;

    // Add click event to close button
    e.addEventListener('click', function(){
        j.style.visibility = 'hidden';
    });
}


const addShopCardItem = function(title, img, prize) {
    const card = document.createElement('div')
    const h1 = document.createElement('h1')
    const img2 = document.createElement('img')
    const h3 = document.createElement('h3')
    const button = document.createElement('button')



    card.className = 'shopCardItem'
    card.id = 'card'


    h1.className = 'id2o9'
    h1.innerText = title


    img2.src = img


    h3.className = 'PrizeCount'
    h3.innerText = prize

    button.className = 'learnMoreButton'
    button.id = 'learnMoreButton'
    button.innerText = 'Learn More'
    


    card.appendChild(h1)
    card.appendChild(img2)
    card.appendChild(h3)
    card.appendChild(button)

    document.body.querySelector('.container').querySelector('.cardsBody').appendChild(card)
}



// Function to add DOMContentLoaded event listener
const addLoaded = function(e){
    document.addEventListener('DOMContentLoaded', e);
}

// Call applyTextToLarnM after DOM content is loaded
addLoaded(function(){
    addShopCardItem('Pizza Boller (Skinke)', './Bilder/Media (2).png', '20 KR')
    



    const buttons = document.getElementsByClassName('shopCardItem');

    console.log(buttons)

    
    const buttonsArray = new Array()
    const forEachButton = new Array()


    const applyButtonTag = function(tag, learnMoreText) {
        forEachButton.push(tag)
        forEachButton.push(learnMoreText)
    }


    /* Skriv in den første, med det name of the item. Next, Info for Learn More */
    applyButtonTag('Pizza Boller (Kjøttedeig)', `Grove Pizza Boller med Tomatsaus.
Ost og Kjøttdeig av storfe.`)

    applyButtonTag('Pizza Boller (Skinke)', `Grove Pizza Boller med Tomatsaus.
Ost og Skinke.`)



    for (let i = 0; i <= buttons.length; i++) {
        if (i >= buttons.length) break;

        buttonsArray.push(buttons.item(i))
    }


    console.log(buttonsArray)
    console.log(forEachButton)



    buttonsArray.forEach(card => {
        const learnMoreButton = card.getElementsByClassName('learnMoreButton');


        

        for (let i = 0; i <= forEachButton.length; i++) {
            /*console.log(i.toString())
            console.log(i, forEachButton.length, i <= forEachButton.length)*/
            if (i <= forEachButton.length) {
                let name = card.getElementsByClassName('id2o9')


                if (forEachButton[i] == name[0].innerText) {
                    let learnMoreB = card.getElementsByClassName('learnMoreButton')


                    learnMoreB[0].addEventListener('click', function(){
                        applyTextToLarnM(forEachButton[i + 1])
                    })

                    break
                }
            }

            if (i > forEachButton.length) break;
        }

        forEachButton.forEach(r => {
            console.log(r)
        })

        /*
        learnMoreButton[0].addEventListener('click', function(){
            applyTextToLarnM('Pizza Boller')
        })
        */
    })
});
