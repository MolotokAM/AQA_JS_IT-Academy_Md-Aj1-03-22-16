const BasePage = require('./basePage');
const MainPage = require('./mainPage');
const SearchResultsPage = require('./searchResultsPage');
const ProductPage = require('./productPage');
const BasketPage = require('./basketPage');
const BaseElement = require('../helpers/baseElements');
const Header = require('../pageObjects/pageComponents/header');
const Menu = require('../pageObjects/pageComponents/menu');
const Search = require('../pageObjects/pageComponents/search');

class PageFactory {
    constructor(page) {
        this.page = page;
        this.basePage = new BasePage(page);
        this.mainPage = new MainPage(page);
        this.searchResultsPage = new SearchResultsPage(page);
        this.productPage = new ProductPage(page);
        this.basketPage = new BasketPage(page);
        this.baseElement = new BaseElement(page);
        this.header = new Header(page);
        this.menu = new Menu(page);
        this.search = new Search(page);
    }
}

module.exports = PageFactory;