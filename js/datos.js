/*var Arr_data = []
var Arr_precio = []
var Arr_codigo = []
var archivo = new XMLHttpRequest()
var imagenes = 'database/db.txt'
var descripcion = 'database/desc.txt'
var precio = 'database/precio.txt'
var codigo = 'database/codigo.txt'

archivo.open("GET", imagenes, false)
archivo.send(null)
var rpt_img = archivo.responseText
var lista_img = rpt_img.split('\n')

archivo.open("GET", descripcion, false)
archivo.send(null)
var rpt_desc = archivo.responseText
var lista_desc = rpt_desc.split('\n')

archivo.open("GET", precio, false)
archivo.send(null)
var rpt_pre = archivo.responseText
var lista_pre = rpt_pre.split('\n')

archivo.open("GET" , codigo, false)
archivo.send(null)
var rpt_cod = archivo.responseText
var lista_cod = rpt_cod.split('\n')

for(var i = 0; i < lista_img.length; i++)
{
    Arr_data.push([lista_img[i], lista_desc[i]])
    Arr_precio.push([lista_pre[i]])
    Arr_codigo.push([lista_cod[i]])
}

for(var i = 0; i < Arr_data.length; i++)
{
    var img  = 
    `<div class='col-12 col-sm-12 col-md-6 col-lg-4'> 
        <div class='box'>
            <div class='col-12 col-sm-12 col-md-12 col-lg-12'>
                <img src='img/${ Arr_data[i][0]} ' class='img-fluid'>
            </div>
            </br>`
            for(var j = 1; j < Arr_data[i].length; j++)
            {
                var nombre_pro = 
            `<h4 class='title'><a> ${ Arr_data[i][j] } </a></h4>
                <ul class='description'>
                    <li> ${ Arr_precio[i] } </li>
                    <li> ${ Arr_codigo[i] } </li>
                    <li>Consulta y/o duda por: </li>
                </ul></br>
                <div class='row'>
                    <div class='col-6 col-sm-6 col-md-6 col-lg-6'>
                        <a href='https://api.whatsapp.com/send?phone=51957752241&text=${ Arr_data[i][j] +" "+ Arr_precio[i] +" "+Arr_codigo[i] }' 
                        target='_blank'><i class='fa fa-whatsapp fa-3x'></i></a>
                    </div>
               </div>
        </div>
    </div> `
                document.getElementById("img").innerHTML += img + nombre_pro 
            }
}
*/

