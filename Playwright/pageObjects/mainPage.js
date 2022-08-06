const BasePage = require('./basePage');

class MainPage extends BasePage {
    constructor(page) {
        super(page);
        this.page = page;
        this.recommendedGoods = page.locator('.goods__item.goods-card.j-product-item');
    }
}

module.exports = MainPage;