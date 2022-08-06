const BasePage = require('./basePage');

class BasketPage extends BasePage {
    constructor(page) {
        super(page);
        this.page = page;
        this.productBrand = page.locator('.good-info__title.j-product-popup span:last-child');
        this.sizeOfProduct = page.locator('span.good-info__item:last-child').nth(0);
        this.deleteButton = page.locator('.btn__del.j-basket-item-del');
        this.basketEmpty = page.locator('.basket-page__basket-empty.basket-empty>h1');
    }
}

module.exports = BasketPage;