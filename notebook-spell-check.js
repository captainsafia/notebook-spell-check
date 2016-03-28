define(['base/js/namespace', 'jquery'], function(Jupyter, $) {
    function spell_check_cell() {
        console.log('Spell-checking active cell...');
    }

    function place_spell_check_button() {
        if (!Jupyter.toolbar) {
            $([Jupyter.events]).on("app_initialized.NotebookApp", place_spell_check_button);
            return;
        }

        if ($("#spell-check-button").length === 0) {
            Jupyter.toolbar.add_buttons_group([
                {
                    'label': 'Spell Check Notebook Cell',
                    'icon': ' fa-check-square-o',
                    'callback': spell_check_cell,
                    'id': 'spell-check-button'
                }
            ]);
        }
    }

    function load_ipython_extension() {
        console.log('Loading notebook-spell-check extension...');
        place_spell_check_button();
    }

    return {
        load_ipython_extension: load_ipython_extension
    };
});
