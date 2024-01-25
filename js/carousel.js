
var e_citera_images = [];
var e_cit_imgs_index = 0;

var char_sheet_images = [];
var char_sheet_imgs_index = 0;

var tia_VII_images = [];
var tia_VII_index = 0;

var ttt_images = [];
var ttt_imgs_index = 0;

var fod_images = [];
var fod_imgs_index = 0; 

function Init_Carousels()
{
    e_citera_images = document.getElementsByName("e-citera_img");
    e_citera_images[0].style.display = "flex";

    char_sheet_images = document.getElementsByName("char_sheet_img");
    char_sheet_images[0].style.display = "flex";

    tia_VII_images = document.getElementsByName("tia_7_img");
    tia_VII_images[0].style.display = "flex";
    
    ttt_images = document.getElementsByName("ttt_img");
    ttt_images[0].style.display = "flex";

    fod_images = document.getElementsByName("fod_img");
    fod_images[0].style.display = "flex";
}

function check_next_index_forward(index, images)
{
    index++;

    if (index > images.length - 1)
    {
        index = 0;
    }

    return index;

}

function check_prev_index_forward(index, images)
{
    let prev_index = index - 1;

    if (prev_index < 0)
    {
        prev_index = images.length - 1;
    }

    return prev_index;

}

function e_cit_next()
{
    e_cit_imgs_index = check_next_index_forward(e_cit_imgs_index, e_citera_images);
    let prev_index = check_prev_index_forward(e_cit_imgs_index, e_citera_images);

    e_citera_images[prev_index].style.display = "none";
    e_citera_images[e_cit_imgs_index].style.display = "flex";
}


function char_sheet_next()
{
    char_sheet_imgs_index = check_next_index_forward(char_sheet_imgs_index, char_sheet_images);
    let prev_index = check_prev_index_forward(char_sheet_imgs_index, char_sheet_images);

    char_sheet_images[prev_index].style.display = "none";
    char_sheet_images[char_sheet_imgs_index].style.display = "flex";
}

function tia_VII_next()
{
    tia_VII_index = check_next_index_forward(tia_VII_index, tia_VII_images);
    let prev_index = check_prev_index_forward(tia_VII_index, tia_VII_images);

    tia_VII_images[prev_index].style.display = "none";
    tia_VII_images[tia_VII_index].style.display = "flex";
}

function ttt_next()
{
    ttt_imgs_index = check_next_index_forward(ttt_imgs_index, ttt_images);
    let prev_index = check_prev_index_forward(ttt_imgs_index, ttt_images);

    ttt_images[prev_index].style.display = "none";
    ttt_images[ttt_imgs_index].style.display = "flex";
}

function fod_next()
{
    fod_imgs_index = check_next_index_forward(fod_imgs_index, fod_images);
    let prev_index = check_prev_index_forward(fod_imgs_index, fod_images);

    fod_images[prev_index].style.display = "none";
    fod_images[fod_imgs_index].style.display = "flex";
}

function check_next_index_backward(index, images)
{
    index--;

    if (index < 0)
    {
        index = images.length - 1;
    }

    return index;
}

function check_prev_index_backward(index, images)
{
    let prev_index = index + 1;

    if (prev_index > images.length - 1)
    {
        prev_index = 0;
    }

    return prev_index;
}

function e_cit_prev()
{
    e_cit_imgs_index = check_next_index_backward(e_cit_imgs_index, e_citera_images);
    let next_index = check_prev_index_backward(e_cit_imgs_index, e_citera_images);

    e_citera_images[next_index].style.display = "none";
    e_citera_images[e_cit_imgs_index].style.display = "flex";
}

function char_sheet_prev()
{
    char_sheet_imgs_index = check_next_index_backward(char_sheet_imgs_index, char_sheet_images);
    let next_index = check_prev_index_backward(char_sheet_imgs_index, char_sheet_images);

    char_sheet_images[next_index].style.display = "none";
    char_sheet_images[char_sheet_imgs_index].style.display = "flex";
}

function tia_VII_prev()
{
    tia_VII_index = check_next_index_backward(tia_VII_index, tia_VII_images);
    let prev_index = check_prev_index_backward(tia_VII_index, tia_VII_images);

    tia_VII_images[prev_index].style.display = "none";
    tia_VII_images[tia_VII_index].style.display = "flex";
}

function ttt_prev()
{
    ttt_imgs_index = check_next_index_backward(ttt_imgs_index, ttt_images);
    let prev_index = check_prev_index_backward(ttt_imgs_index, ttt_images);

    ttt_images[prev_index].style.display = "none";
    ttt_images[ttt_imgs_index].style.display = "flex";
}

function fod_prev()
{
    fod_imgs_index = check_next_index_backward(fod_imgs_index, fod_images);
    let prev_index = check_prev_index_backward(fod_imgs_index, fod_images);

    fod_images[prev_index].style.display = "none";
    fod_images[fod_imgs_index].style.display = "flex";
}
