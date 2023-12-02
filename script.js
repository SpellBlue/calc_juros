
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

const ccalc = document.querySelector('#ccalc')

ccalc.addEventListener('click',()=>{
    const cpreço = document.querySelector('#cpreço').value
    let ctaxa = document.querySelector('#ctaxa').value
    let ctempo = document.querySelector('#ctempo').value
    ctaxa = (1+ctaxa/100)
    let i = ctaxa
    while (ctempo>1){
        ctaxa*=i
        ctempo--
    }
    this.total = (parseFloat(cpreço)*parseFloat(ctaxa))
    this.juros = (this.total-cpreço)
    cjuros.innerHTML = `Juros: ${this.juros}R$`
    ctotal.innerHTML = `Total: ${this.total}R$`
})