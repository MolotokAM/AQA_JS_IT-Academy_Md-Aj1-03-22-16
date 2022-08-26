const BasePage = require('./basePage');

class HomePage extends BasePage {
    constructor() {
        super();
    }

    get wdioPic() {
        return $('.svg_Eu_K g');
    }

    get subTitle() {
        return $('.hero__subtitle');
    }

    get btnGetStarted() {
        return $('.button--secondary:nth-child(1)');
    }

    get btnWatchTalks() {
        return $('.button--secondary:nth-child(2)');
    }

    get btnReadBook() {
        return $('.button--secondary:nth-child(3)');
    }

    get btnTakeCourse() {
        return $('.button--secondary:nth-child(4)');
    }

    get btnSupport() {
        return $('.button--secondary:nth-child(5)');
    }
}

module.exports = HomePage;
