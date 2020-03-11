var Arr_data = []
var archivos = new XMLHttpRequest()
var rpt_archivo
var lista_arch

var imagenes = "database/db.txt"
var descripcion = "database/desc.txt"
var precio = "database/precio.txt"
var codigo = "database/codigo.txt"

class Producto 
{
    
    // Getter 
    get Archivo()
    {
        return this.leerArchivo()
    }

    get Datos()
    {
        return this.MostrarDatos()
    }

    get Json()
    {
        return this.JsonDatos()
    }

    //Método
    leerArchivo(archivo)
    {
        
        archivos.open("GET", archivo, false)
        archivos.send()
        rpt_archivo = archivos.responseText
        lista_arch = rpt_archivo.split('\n')
        return lista_arch
    }

    MostrarDatos()
    {
        
        var lista_img = this.leerArchivo(imagenes)
        var lista_desc = this.leerArchivo(descripcion)
        var lista_pre = this.leerArchivo(precio)
        var lista_cod = this.leerArchivo(codigo)

        for(var i= 0; i < lista_img.length; i++)
        {
            Arr_data.push([ lista_img[i], lista_desc[i], lista_pre[i], lista_cod[i] ])
        }

        for(var i = 0; i < Arr_data.length; i++)
        {
            var img  = 
            `<div class='col-12 col-sm-12 col-md-6 col-lg-4'> 
                <div class='box'>
                    <div class='col-12 col-sm-12 col-md-12 col-lg-12'>
                        <img src='img/${ Arr_data[i][0]} ' class='img-fluid'>
                    </div>
                    </br>
                    <h4 class='title'><a> ${ Arr_data[i][1] } </a></h4>
                        <ul class='description'>
                            <li> ${ Arr_data[i][2] } </li>
                            <li> ${ Arr_data[i][3] } </li>
                            <li>Consulta y/o duda por: </li>
                        </ul></br>
                        <div class='row'>
                            <div class='col-6 col-sm-6 col-md-6 col-lg-6'>
                                <a href='https://api.whatsapp.com/send?phone=51957752241&text=${ Arr_data[i][1] +" "+ Arr_data[i][2] +" "+Arr_data[i][3] }' 
                                target='_blank'><i class='fa fa-whatsapp fa-3x'></i></a>
                            </div>
                       </div>
                </div>
            </div> `
            document.getElementById("img").innerHTML += img 
                    
        }
    }

    JsonDatos()
    {
        var t_img = this.leerArchivo(imagenes)
        var t_desc = this.leerArchivo(descripcion)
        var t_pre = this.leerArchivo(precio)
        var t_cod = this.leerArchivo(codigo)

        for(var i = 0; i < t_img.length; i++)
        {
            Arr_data.push( [t_img[i], t_desc[i], t_pre[i], t_cod[i] ])
        }

        var myJSON = JSON.stringify(Arr_data)
        document.getElementById("json").innerHTML = myJSON
    }
}