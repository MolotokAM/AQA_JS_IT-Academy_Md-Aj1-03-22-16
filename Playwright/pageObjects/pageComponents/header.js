const BasePage = require('../basePage');

class Header extends BasePage {
    constructor(page) {
        super(page);
        this.page = page;
        this.menuButton = page.locator('.nav-element__burger.j-menu-burger-btn.j-wba-header-item');
        this.mainPageButton = page.locator('.nav-element__logo.j-wba-header-item');
        this.basketButton = page.locator('.navbar-pc__icon.navbar-pc__icon--basket');
    }
}

module.exports = Header;