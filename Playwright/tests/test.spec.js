const { test, expect } = require('@playwright/test');
const PageFactory = require('../pageObjects/pageFactory');

test.beforeEach(async ({ page }) => {
    const _ = new PageFactory(page);
    await _.mainPage.navigate('https://by.wildberries.ru/');
});

test.describe('Website Wildberries.ru testing', () => {
    test('1. Check Homepage button', async ({ page }) => {
        const _ = new PageFactory(page);
        await _.baseElement.click(_.header.menuButton);
        await _.baseElement.click(_.menu.beautyButton);
        await _.baseElement.click(_.header.mainPageButton);
        await expect(page).toHaveURL('https://by.wildberries.ru/');
    })

    test('2. Check title', async ({ page }) => {
        const _ = new PageFactory(page);
        await _.baseElement.click(_.header.menuButton);
        await _.baseElement.click(_.menu.accessoriesButton);
        await expect(page).toHaveTitle(/.*аксессуары.*/);
    })

    test('3. Check search results', async ({ page }) => {
        const _ = new PageFactory(page);

        await _.search.searchProduct('платье');
        await expect(_.searchResultsPage.goodsName.nth(0)).toContainText(/платье/i);
    })

    test('4. Check adding goods to basket', async ({ page }) => {
        const _ = new PageFactory(page);

        await _.search.searchProduct('платье');
        await _.baseElement.click(_.searchResultsPage.firstResult);
        await _.baseElement.click(_.productPage.sizeButton.nth(0));

        const brandNameOfGoods = await _.productPage.productBrand.nth(0).textContent();
        const sizeOfGoods = await _.productPage.selectedSize.textContent();

        await _.baseElement.click(_.productPage.addToCartButton);
        await page.waitForTimeout(1000);
        await _.baseElement.click(_.header.basketButton);
        await expect(await _.basketPage.productBrand).toContainText(brandNameOfGoods);
        await expect(await _.basketPage.sizeOfProduct).toContainText(sizeOfGoods);
    })

    test('5. Check removal of goods from basket', async ({ page }) => {
        const _ = new PageFactory(page);

        await _.baseElement.click(_.mainPage.recommendedGoods.nth(0));
        await _.baseElement.click(_.productPage.addToCartButton);
        await page.waitForTimeout(1500);
        await _.baseElement.click(_.header.basketButton);
        await _.basketPage.deleteButton.click();
        await expect(await _.basketPage.basketEmpty).toHaveText('В корзине пока ничего нет')
    })
})