const sampleArray = [469, 755, 244, 245, 758, 450, 302, 17, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

function showResults(show){

    console.log(show)

}



function kata1() {

    let resultado1 = []
    
    for(let i = 1; i <= 25; i++){

        resultado1.push(i)
    }
    
    return showResults(resultado1)

}
kata1()



function kata2() {
    let resultado2 = []

    for(let i = 25; i >= 1; i--) {

        resultado2.push(i)

    }

    return showResults(resultado2.join(" "))

}
kata2()


function kata3() {

    let resultado3 = []

    for(let i = -1; i >= -25; i--) {

        resultado3.push(i)


    }
    return showResults(resultado3)
}
kata3()


function kata4() {

    let resultado4 = []

    for(let i = -25; i <= -1; i++) {

        resultado4.push(i)

    }

    return showResults(resultado4)


}
kata4()


function kata5() {

    let resultado5 = []

    for(let i = 25; i >= -25; i--) {
    

        resultado5.push(i)


    }

    return showResults(resultado5)



    
}
kata5()


function kata6() {

    let resultado6 = []

    for(let i = 1; i <= 100; i++) {

        if(i % 3 == 0) {

            resultado6.push(i)

        }



    }


    return showResults(resultado6)
}
kata6()


function kata7() {
    let resultado7 = []

    for(let i = 1; i <= 100; i++){

        if(i % 7 == 0) {

            resultado7.push(i)
        }


    }
    return showResults(resultado7)
}
kata7()


function kata8() {
    
    let resultado8 = []

    for(let i = 100; i >= 1; i--){

        if(i % 3 == 0) {

            resultado8.push(i)

        }

        if(i % 7 == 0) {

            resultado8.push(i)

        }


    }
    return showResults(resultado8)
}
kata8() 


function kata9() {

    let resultado9 = []

    for(let i = 1; i <= 100; i++) {

        if(i % 2 == 1) {

            if(i % 5 == 0) {

                resultado9.push(i)

            }
        }

    }
    return showResults(resultado9)
}
kata9()


function kata10() {
    
    let resultado10 = []

    for(let i = 0; i < sampleArray.length; i++) {

        resultado10.push(sampleArray[i])

    }
    return showResults(resultado10)

}
kata10(sampleArray)


function kata11() {

    let resultado11 = []

    for(let i = 0; i <= sampleArray.length; i++) {

        if(sampleArray[i] % 2 == 0) {

            resultado11.push(sampleArray[i])

        }

    }
    return showResults(resultado11)

}
kata11(sampleArray)


function kata12() {

    let resultado12= []

    for(let i = 0; i <= sampleArray.length; i++) {

        if(sampleArray[i] % 2 == 1) {

            resultado12.push(sampleArray[i])

        }

    }

    return showResults(resultado12)
}
kata12(sampleArray)



function kata13() {
    let resultado13 = []

    for(let i = 0; i <= sampleArray.length; i++){

        if(i % 8 == 0) {

            resultado13.push(sampleArray[i])

        }
    }
    return showResults(resultado13)
}
kata13(sampleArray)

 function kata14() {
    
    let resultado14 = []

    for(let i = 0; i < sampleArray.length; i++){

        resultado14.push(Math.pow(sampleArray[i], 2))

    }
    return showResults(resultado14)
}
kata14(sampleArray) 


function kata15() {

    let resultado15 = 0

    for(let i = 1; i <= 20; i++) {

        resultado15 += i

    }
    return showResults(resultado15)



}
kata15()


function kata16() {
    let resultado16 = 0

    for(let i = 0; i < sampleArray.length; i++){

        if(sampleArray[i] >= 0) {

            resultado16 += sampleArray[i]

        }

    }

    return showResults(resultado16)
}
kata16(sampleArray)


function kata17() {
    let resultado17 = []

    for(let i = 0; i < 1; i++) {

       resultado17.push(Math.min(...sampleArray))

    }
    return showResults(resultado17.join())
}
kata17(sampleArray)



function kata18() {
    let resultado18 = []

    for(let i = 0; i < 1; i++) {

       resultado18.push(Math.max(...sampleArray))

    }
    return showResults(resultado18.join())
}
kata18(sampleArray)


/**
 * Daqui em diante são os bônus, por sua conta e risco
 */

function kataBonus1() {
    // implemente o código do kata bonus 1 aqui
}

function kataBonus2() {
    // implemente o código do kata bonus 2 aqui
}

function kataBonus3() {
    // implemente o código do kata bonus 3 aqui
}

function kataBonus4() {
    // implemente o código do kata bonus 4 aqui
}

function kataBonus5() {
    // implemente o código do kata bonus 5 aqui
}
