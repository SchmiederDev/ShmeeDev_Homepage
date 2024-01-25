var crimson_default = "#FF5686"
var crimson_light = "#FF7FA7";

var dark_gray_default = "#26292D";
var dark_gray_lightUp = "#303238";

const image_files =
["images/E_Citera_Icon.png", "images/E-Citera_Images/E-Citera_MainPage_00.png",
"images/CharSheet_App_Icon.png", "images/MainWindow_Full_View_02.png",
"images/TIA_VII_Icon.png", "images/TIA_VII_Level02_View.png",
"images/FoD_TillFields_View.png"];

function set_image_swapped(caller)
{
    var pathIndex = caller.src.indexOf("images");
    var subPath = caller.src.substring(pathIndex);
    var imageIndex = image_files.indexOf(subPath);

    if(imageIndex >= 0 && imageIndex + 1 < image_files.length)
    {
        caller.src = image_files[imageIndex + 1];
    }
}

function return_default_image(caller)
{
    var pathIndex = caller.src.indexOf("images");
    var subPath = caller.src.substring(pathIndex);
    var imageIndex = image_files.indexOf(subPath);

    if(imageIndex > 0)
    {
        caller.src = image_files[imageIndex - 1];
    }
}

function next_btn_click()
{
    current_image_index++;

    if(current_image_index > image_files.length - 1)
    {
        current_image_index = 0;
    }

    load_next_image(current_image_index);
}

function prev_btn_click()
{
    current_image_index--;

    if(current_image_index < 0)
    {
        current_image_index = image_files.length - 1;
    }

    load_next_image(current_image_index);
}

function load_next_image(index)
{
    var file_name = "images/" + image_files[index];
    current_image.src = file_name;

    if(file_name.includes("View"))
    {
        current_image.style.width = "600px";
    }

    else
    {
        current_image.style.width = "300px";
    }
}
