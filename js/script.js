const persona = {
    datos_personales:{
        nombre: "Juan", 
        apellido: "Gomez",
        edad:51,
        nacionalidad:"Argentino",
        domicilio:{
            pais:"Argentina",
            provincia:"El Paraje",
            ciudad:"Los Alamos",
            direccion:"Juan José Paso",
            numero:"585",
            codpost:"2939"
        },
        lic_conducir:"SI",
        estado_civil:"casado"
    },
    contacto:{
        cel:"+5411354456",
        email:"juangomez@hotmail.com",
        facebook:"facebook.com/juangomez",
        twitter:"twitter.com/juangomez",
        linkedin:"www.linkedin.com/in/juangomez"
    }
};

document.getElementById("boton1").onclick=function(){
    document.getElementById("seccion1").style.display="block";
    document.getElementById("boton1").className="boton-nav border p-2 rounded-3 bg-primary";
    document.getElementById("seccion2").style.display="none";
    document.getElementById("boton2").className="boton-nav border p-2 rounded-3 bg-secondary";
    document.getElementById("seccion3").style.display="none";
    document.getElementById("boton3").className="boton-nav border p-2 rounded-3 bg-secondary";
    document.getElementById("seccion4").style.display="none";
    document.getElementById("boton4").className="boton-nav border p-2 rounded-3 bg-secondary";
};

document.getElementById("boton2").onclick=function(){
    document.getElementById("seccion2").style.display="block";
    document.getElementById("boton2").className="boton-nav border p-2 rounded-3 bg-primary";
    document.getElementById("seccion1").style.display="none";
    document.getElementById("boton1").className="boton-nav border p-2 rounded-3 bg-secondary";
    document.getElementById("seccion3").style.display="none";
    document.getElementById("boton3").className="boton-nav border p-2 rounded-3 bg-secondary";
    document.getElementById("seccion4").style.display="none";
    document.getElementById("boton4").className="boton-nav border p-2 rounded-3 bg-secondary";
};

document.getElementById("boton3").onclick=function(){
    document.getElementById("seccion3").style.display="block";
    document.getElementById("boton3").className="boton-nav border p-2 rounded-3 bg-primary";
    document.getElementById("seccion2").style.display="none";
    document.getElementById("boton2").className="boton-nav border p-2 rounded-3 bg-secondary";
    document.getElementById("seccion1").style.display="none";
    document.getElementById("boton1").className="boton-nav border p-2 rounded-3 bg-secondary";
    document.getElementById("seccion4").style.display="none";
    document.getElementById("boton4").className="boton-nav border p-2 rounded-3 bg-secondary";
};

document.getElementById("boton4").onclick=function(){
    document.getElementById("seccion4").style.display="block";
    document.getElementById("boton4").className="boton-nav border p-2 rounded-3 bg-primary";
    document.getElementById("seccion2").style.display="none";
    document.getElementById("boton2").className="boton-nav border p-2 rounded-3 bg-secondary";
    document.getElementById("seccion3").style.display="none";
    document.getElementById("boton3").className="boton-nav border p-2 rounded-3 bg-secondary";
    document.getElementById("seccion1").style.display="none";
    document.getElementById("boton1").className="boton-nav border p-2 rounded-3 bg-secondary";
};
