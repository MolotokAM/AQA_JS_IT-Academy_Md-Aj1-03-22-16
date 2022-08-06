const BasePage = require('./basePage');

class ProductPage extends BasePage {
    constructor(page) {
        super(page);
        this.page = page;
        this.sizeButton = page.locator('.sizes-list__item');
        this.productBrand = page.locator('.same-part-kt__header span:first-child');
        this.selectedSize = page.locator('.j-size.active .sizes-list__size');
        this.addToCartButton = page.locator('.same-part-kt__btn-wrap');
    }
}

module.exports = ProductPage;