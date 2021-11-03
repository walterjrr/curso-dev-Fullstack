
const cidades = {
  rj: ['Jundiaí', 'Campinas', 'Limeira', 'Atibaia'],
  pe: ['Teresópolis', 'Resende', 'Maricá', 'Macaé'],
}

const cadastro = document.querySelector('#cadastro')
const selectEstados = document.querySelector('#estados-select')
const selectCidades = document.querySelector('#Cidades-select')
const divCidades = document.querySelector('#divcidades')

selectEstados.onchange = function(e){
   const estado = e.target.value

  
  let listaCidades

   
  if (estado === 'rj') {
    listaCidades = cidades.rj
  }

  if (estado === 'pe') {
    listaCidades = cidades.pe
  }
  
  let htmlCidades = `<option value=''>-- Selecione a Cidade --</option>`

    
  for(let cidade of listaCidades) {
    htmlCidades += `<option value='${cidade}'>${cidade}</option>`
  }

    
  selectCidades.innerHTML = htmlCidades
    
  divCidades.classList.add('Visible')
}
    
  cadastro.onsubmit = function(e){
    e.preventDefault()
  

    
  let temErro = false
    
    let selectEstados = document.forms['cadastro']['estado']
    let selectCidade = document.forms['cadastro']['cidade']
    
      
    if(!selectEstados.value){
      temErro = true
      selectEstados.classList.add('inputError')
        
      let span = selectEstados.nextSibling.nextSibling
      span.innerText = 'Selecione o estado'    
    } else {
        
      selectEstados.classList.remove('inputError')

      let span = selectEstados.nextSibling.nextSibling
      span.innerText = ''    
    }
      
    if(!selectCidade.value){
      temErro = true
      selectCidade.classList.add('inputError')

      let span = selectCidade.nextSibling.nextSibling
      span.innerText = 'Selecione a cidade'    
    } else {
      selectCidade.classList.remove('inputError')

      let span = selectCidade.nextSibling.nextSibling
      span.innerText = ''    
    }

      
    if (!temErro) {
      formulario.submit()
    }
  }
