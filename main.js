let frut = ["olma", "nok",  "olcha", "uzum"  ]

alert("Boshlanishida Arryning uzunligi: " + frut.length )

console.log(frut);

let very = confirm("ohiridan mevani olishni hohlaysizmi?")

if(very){
    frut.pop()
}

alert("Arryning uzunligi: " + frut.length )

console.log(frut);