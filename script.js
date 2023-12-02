
const stotal = document.querySelector('#stotal')
const sjuros = document.querySelector('#sjuros')

const scalc = document.querySelector('#scalc')

scalc.addEventListener('click',()=>{
    const spreço = document.querySelector('#spreço').value
    const staxa = document.querySelector('#staxa').value
    const stempo = document.querySelector('#stempo').value
    this.juros = (parseFloat(spreço)*parseFloat(staxa/100)*parseFloat(stempo))
    this.total = (parseFloat(spreço)+this.juros)
    if (isNaN(this.juros)){
        window.alert('Preencha todos os campos')
    }
    else{
        sjuros.innerHTML = `Juros: ${this.juros}R$`
        stotal.innerHTML = `Total: ${this.total}R$`
    }
})

const ctotal = document.querySelector('#ctotal')
const cjuros = document.querySelector('#cjuros')
const cequiv = document.querySelector('#cequiv')

const ccalc = document.querySelector('#ccalc')

ccalc.addEventListener('click',()=>{
    const cpreço = document.querySelector('#cpreço').value
    let ctaxa = document.querySelector('#ctaxa').value
    let ctempo = document.querySelector('#ctempo').value
    ctaxa = (1+ctaxa/100)
    let ctaxa2 = ctaxa
    let i = ctaxa
    let i2 = 12
    while (ctempo>1){
        ctaxa*=i
        ctempo--
    }

    while (i2>1){
        ctaxa2*=i
        i2--
    }
    ctaxa2-=1

    this.equiv = (ctaxa2*100)
    this.equiv = this.equiv.toFixed(2)

    this.total = (parseFloat(cpreço)*parseFloat(ctaxa))
    this.total = this.total.toFixed(2)

    this.juros = (this.total-cpreço)
    this.juros = this.juros.toFixed(2)
    
    if (isNaN(this.juros)){
        window.alert('Preencha todos os campos')
    }
    else{
        cequiv.innerHTML = `Taxa equivalente: ${this.equiv}% por ano`
        cjuros.innerHTML = `Juros: ${this.juros}R$`
        ctotal.innerHTML = `Total: ${this.total}R$`
}
})