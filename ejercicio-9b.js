var diasstr = "Lunes,Martes,Miercoles,Jueves,Viernes,Sabado,Domingo";
var ciudadstr = "Madrid.Sevilla.Barcelona.Valencia.Zaragoza.Bilbao.Donosti";
var dias = diasstr.split(",");
var ciudad = ciudadstr.split(",");
var l = dias.length;
var concierto = [];
var i;
for (i = 0; i < l; i++) {
  concierto.push([días[i],ciudad[i]]);
}
