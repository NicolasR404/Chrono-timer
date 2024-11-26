
// Template

// dans le future lists de list
const template_default = ["#F8F1D0", "#e0bf22", "#0b8457", "#096c46"],
    template_vert = ["#F5F5F5", "#A9C52F", "#2C5D63", "#283739"];

var dict_template_selected = {
    couleur_primaire: template_default[0],
    couleur_secondaire: template_default[1],
    couleur_detail: template_default[2],
    couleur_second_detail: template_default[3],
};

function selected_template(dict_template_selected, template_selected){
    dict_template_selected.couleur_primaire = template_selected[0];
    dict_template_selected.couleur_secondaire = template_selected[1];
    dict_template_selected.couleur_detail = template_selected[2];
    dict_template_selected.couleur_second_detail = template_selected[3];
}

// Element Css/Html
const buttonElement = document.getElementById('swap_template');
const root = document.documentElement;

// Version button test, permet de changer de template
buttonElement.addEventListener ('click', () => {
    selected_template(dict_template_selected, template_vert);
    console.log(dict_template_selected);

    // Changement des differentes variable liée a la couleur
    root.style.setProperty('--couleur_primaire', dict_template_selected.couleur_primaire);
    root.style.setProperty('--couleur_secondaire', dict_template_selected.couleur_secondaire);
    root.style.setProperty('--couleur_detail', dict_template_selected.couleur_detail);
    root.style.setProperty('--couleur_second_detail', dict_template_selected.couleur_second_detail);
});