interface ISlider {
  title: string;
  desc: string;
  image: string;
}

export class SliderClass {
  constructor(public title: string, public desc: string, public image: string) {
  }
}

export let Sliders:SliderClass[] = [
  new SliderClass("Great	eaten	fresh	from	oven. Used	to	make	sub sandwiches,	etc.", "first description", "http://www.farmaciamontecalcoli.it/wp-content/uploads/2017/02/healthy-food-web.jpg"),
  new SliderClass("Pork	ribs	are	a	cut	of	pork popular	in	North	American and	Asian	cuisines", "second description", "https://menu-vegetarien.com/wp-content/uploads/2015/09/slider3.jpg"),
  new SliderClass("Cucumber	is	a	widely cultivated	plant	in	the	gourd family,	Cucurbitaceae", "third description", "http://ipalate.com/img/spaoils%20slide3.jpg"),
  new SliderClass("title four", "forth description", "https://www.zaggle.in/assets/images/group_dining_main_banner.jpg"),
  new SliderClass("The	pork	tenderloin,	in	some countries	called	pork	fillet,	is a	cut	of	pork", "fifth description", "http://krishistar.com/wp-content/themes/biznaz/images/preview/wide-img-1.jpg"),
];
