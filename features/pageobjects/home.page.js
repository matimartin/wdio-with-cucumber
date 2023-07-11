const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    /**
     * define selectors using getter methods
     */
    get flashAlert () {
        return $('#flash');
    }

    get seriesManagerTitle () {
        return $('span._xxl_ypyit_72');
    }

    get btnNewSeries () {
        return $('a._newseriesbutton_1bgk0_26');
    }

    get dropboxCompany () {
        return $('div.react-select__input-container.css-19bb58m');
    }
}

module.exports = new HomePage();
