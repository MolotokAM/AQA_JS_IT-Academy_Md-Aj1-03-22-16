/**
 * Ответом на это письмо прислать локаторы xpath и css для следующих элементов: сайт https://www.bbc.co.uk/
 * 
 * 1 - элемент с картинкой:
//div[@class="responsive-image"]
.module--promo .media-list__item--1 .responsive-image

 * 2 - топ нав меню:
 * найти только первый видимый элемент:
//[@class="orbit-header-links international"]//li[@class="orb-nav-homedotcom"]
.orbit-header-links .orb-nav-homedotcom a

 * последний видимый элемент:
//*[@class="orbit-header-links international"]//li[@class="orb-nav-sounds"]/a
.orbit-header-links .orb-nav-sounds a

 * найти все видимые элементы:
//*[@class="orbit-header-links international"]//li
.orbit-header-links.international li

 * все невидимые элементы:
//*[@class="orbit-header-links domestic"]//li
.orbit-header-links.domestic li

 * найти нечетные элементы:
//*[@class="orbit-header-links international"]//li[position() mod 2 = 1]
.orbit-header-links.international li:nth-child(odd)

 * 3 - дата:
//*[@class="module module--header"]/h2/text()
.module--header > .module__title

 * 4 - кликабельный элемент поиска:
//*[@id="orbit-search-button"]
#orbit-search-button

 * 5 - лого.
//[@id="homepage-link"]/[name()='svg']
#homepage-link svg

 * 6 - новости блоком.
//section[@class="module module--news module--collapse-images"]
.module--news

 */