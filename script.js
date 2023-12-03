
const stotal = document.querySelector('#stotal')
const sjuros = document.querySelector('#sjuros')

const scalc = document.querySelector('#scalc')

scalc.addEventListener('click',()=>{
    this.selecttaxa = document.querySelector('#staxaselect').value
    this.selecttempo = document.querySelector('#stemposelect').value
    const spreço = document.querySelector('#spreço').value
    const staxa = document.querySelector('#staxa').value
    let stempo = document.querySelector('#stempo').value

    if ((selecttaxa == 'mes') && (selecttempo == 'ano')){
        stempo*=12
    }
    else if ((selecttaxa == 'ano') && (selecttempo == 'mes')){
        stempo/=12
    }
        this.juros = (parseFloat(spreço)*parseFloat(staxa/100)*parseFloat(stempo))
        this.juros = parseFloat(this.juros.toFixed(2))
        this.total = (parseFloat(spreço)+this.juros)
        this.total = parseFloat(this.total.toFixed(2))
        if (isNaN(this.juros)){
            window.alert('Preencha os campos corretamente')
        }
        else{
            sjuros.innerHTML = `Juros: ${this.juros}R$`
            stotal.innerHTML = `Total: ${this.total}R$`
        }
    })

//------------------------------------------------------------------------------------------//

const ctotal = document.querySelector('#ctotal')
const cjuros = document.querySelector('#cjuros')
const cequiv = document.querySelector('#cequiv')

const ccalc = document.querySelector('#ccalc')

ccalc.addEventListener('click',()=>{
    cequiv.innerHTML = ''

    this.selecttaxa = document.querySelector('#ctaxaselect').value
    this.selecttempo = document.querySelector('#ctemposelect').value
    
    const cpreço = document.querySelector('#cpreço').value
    let ctaxa = document.querySelector('#ctaxa').value
    let ctempo = document.querySelector('#ctempo').value

    ctaxa = (1+ctaxa/100)
    
    let i = ctaxa
    
    if ((selecttaxa == 'mes') && (selecttempo == 'ano')){
        ctempo*=12
    }
    else if ((selecttaxa == 'ano') && (selecttempo == 'mes')){
        ctempo/=12
    }

    while (ctempo>1){
        ctaxa*=i
        ctempo--
    }

    let ctaxa2 = ctaxa
    ctaxa2-=1

    this.equiv = (ctaxa2*100)
    this.equiv = this.equiv.toFixed(2)

    this.total = (parseFloat(cpreço)*parseFloat(ctaxa))
    this.total = this.total.toFixed(2)

    this.juros = (this.total-cpreço)
    this.juros = this.juros.toFixed(2)
    
    if (isNaN(this.juros)){
        window.alert('Preencha os campos corretamente')
    }
    else{
        if (selecttempo == 'ano'){
            cequiv.innerHTML = `Taxa equivalente: ${this.equiv}% em ${document.querySelector('#ctempo').value} anos`
        }
        else if(selecttempo == 'mes'){
            cequiv.innerHTML = `Taxa equivalente: ${this.equiv}% em ${document.querySelector('#ctempo').value} meses`
        }
        cjuros.innerHTML = `Juros: ${this.juros}R$`
        ctotal.innerHTML = `Total: ${this.total}R$`
    }
})