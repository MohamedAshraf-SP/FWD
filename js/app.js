

try {
    //-------------------------------------------------------------------------------
    //variables 
    let sections = document.getElementsByClassName('sec')
    let ul = document.createElement('ul')
    let nav = document.getElementById('nav')

    //section create DAYNAMIC header
    //-------------------------------------------------------------------------------

    let createNav = () => {

        for (element of sections) {
            ul.innerHTML += `<li class='${element.id}'><a href="#${element.id}">${element.id}</a></li>`
        }
        nav.appendChild(ul)
    }

    window.addEventListener('load', createNav());

    //-------------------------------------------------------------------------------
    //underline header
    let underlineHeaders = () => {
        let headers = document.querySelectorAll('h1')
        for (const h of headers) {
            h.style.textDecoration = 'underline'
        }
    }

    underlineHeaders()
    //-------------------------------------------------------------------------------

    //li active& go to section with scroll
    // getting sections Bounding

    let bounds = function () {
        let sectionsBound = []
        for (sec of sections) {
            sectionsBound.push({ bounds: sec.getBoundingClientRect(), id: sec.id })
        }
        return sectionsBound;
    }


    window.addEventListener('load', bounds(), { once: true });

    //-------------------------------------------------------------------------------

    let sectionsBounds = bounds()
    //-------------------------------------------------------------------------------   

    function scroller() {
        let liS = document.querySelectorAll('#nav ul li')
        let sectionsBound = sectionsBounds
        liS.forEach((ele, count) => {
            ele.addEventListener('click', function (event) {

                event.preventDefault()
                let sec = document.getElementById(ele.className)
                sec.scrollIntoView({ behavior: "smooth", block: "start", inline: "start" });
                this.classList.add('active')


                for (const elem of liS) {
                    if (this != elem)
                        elem.classList.remove('active')

                }


            })

        })

    }
    scroller()



    //-------------------------------------------------------------------------------


    // active HEADS depending on position

    window.addEventListener("scroll", () => {
        for (const section of sections) {

            let rect = section.getBoundingClientRect();
            if (rect.top > -200 && rect.top < 300) {
                //replacement of active class
                document.querySelector(`.${section.id}`).classList.add('active')


            } else {
                document.querySelector(`.${section.id}`).classList.remove('active')

            }
        }
    })




} catch (error) {
}

