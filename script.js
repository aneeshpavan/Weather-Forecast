//2988507 = Paris
$.getJSON("https://api.openweathermap.org/data/2.5/weather?id=2988507&units=metric&appid=eca7ff6bec5818bcf14d8651eab63276",
function(data){
    var icon = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
    var name = data.name + ", " +data.sys.country;
    var temp = Math.floor(data.main.temp) + "<sup>&deg;</sup>";
    var value = data.weather[0].main;
    var value1 = Math.floor(data.main.temp_min)+ "<sup>&deg;</sup>";
    var value2 = Math.floor(data.main.temp_max)+ "<sup>&deg;</sup>";

    $(".icon").attr("src",icon);
    $(".name").append(name);
    $(".temp").append(temp);
    $(".value").append(value);
    $(".value1").append(value1);
    $(".value2").append(value2);
}
);

//5128581 = NewYork
$.getJSON("https://api.openweathermap.org/data/2.5/weather?id=5128581&units=metric&appid=eca7ff6bec5818bcf14d8651eab63276",
function(data){
    var iconny = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
    var nameny = data.name + ", " +data.sys.country;
    var tempny = Math.floor(data.main.temp) + "<sup>&deg;</sup>";
    var valueny = data.weather[0].main;
    var value1ny = Math.floor(data.main.temp_min)+ "<sup>&deg;</sup>";
    var value2ny = Math.floor(data.main.temp_max)+ "<sup>&deg;</sup>";

    $(".iconny").attr("src",iconny);
    $(".nameny").append(nameny);
    $(".tempny").append(tempny);
    $(".valueny").append(valueny);
    $(".value1ny").append(value1ny);
    $(".value2ny").append(value2ny);
}
);

//2643743 = London
$.getJSON("https://api.openweathermap.org/data/2.5/weather?id=2643743&units=metric&appid=eca7ff6bec5818bcf14d8651eab63276",
function(data){
    var iconl = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
    var namel = data.name + ", " +data.sys.country;
    var templ = Math.floor(data.main.temp) + "<sup>&deg;</sup>";
    var valuel = data.weather[0].main;
    var value1l = Math.floor(data.main.temp_min)+ "<sup>&deg;</sup>";
    var value2l = Math.floor(data.main.temp_max)+ "<sup>&deg;</sup>";

    $(".iconl").attr("src",iconl);
    $(".namel").append(namel);
    $(".templ").append(templ);
    $(".valuel").append(valuel);
    $(".value1l").append(value1l);
    $(".value2l").append(value2l);
}
);

//1609348 = Bangkok
$.getJSON("https://api.openweathermap.org/data/2.5/weather?id=1609348&units=metric&appid=eca7ff6bec5818bcf14d8651eab63276",
function(data){
    var iconbk = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
    var namebk = data.name + ", " +data.sys.country;
    var tempbk = Math.floor(data.main.temp) + "<sup>&deg;</sup>";
    var valuebk = data.weather[0].main;
    var value1bk = Math.floor(data.main.temp_min)+ "<sup>&deg;</sup>";
    var value2bk = Math.floor(data.main.temp_max)+ "<sup>&deg;</sup>";

    $(".iconbk").attr("src",iconbk);
    $(".namebk").append(namebk);
    $(".tempbk").append(tempbk);
    $(".valuebk").append(valuebk);
    $(".value1bk").append(value1bk);
    $(".value2bk").append(value2bk);
}
);

//1819729 = Hong Kong
$.getJSON("https://api.openweathermap.org/data/2.5/weather?id=1819729&units=metric&appid=eca7ff6bec5818bcf14d8651eab63276",
function(data){
    var iconhg = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
    var namehg = data.name + ", " +data.sys.country;
    var temphg = Math.floor(data.main.temp) + "<sup>&deg;</sup>";
    var valuehg = data.weather[0].main;
    var value1hg = Math.floor(data.main.temp_min)+ "<sup>&deg;</sup>";
    var value2hg = Math.floor(data.main.temp_max)+ "<sup>&deg;</sup>";

    $(".iconhg").attr("src",iconhg);
    $(".namehg").append(namehg);
    $(".temphg").append(temphg);
    $(".valuehg").append(valuehg);
    $(".value1hg").append(value1hg);
    $(".value2hg").append(value2hg);
}
);

//292224 = Dubai
$.getJSON("https://api.openweathermap.org/data/2.5/weather?id=292224&units=metric&appid=eca7ff6bec5818bcf14d8651eab63276",
function(data){
    var icond = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
    var named = data.name + ", " +data.sys.country;
    var tempd = Math.floor(data.main.temp) + "<sup>&deg;</sup>";
    var valued = data.weather[0].main;
    var value1d = Math.floor(data.main.temp_min)+ "<sup>&deg;</sup>";
    var value2d = Math.floor(data.main.temp_max)+ "<sup>&deg;</sup>";

    $(".icond").attr("src",icond);
    $(".named").append(named);
    $(".tempd").append(tempd);
    $(".valued").append(valued);
    $(".value1d").append(value1d);
    $(".value2d").append(value2d);
}
);
