import "./slider";
import modals from "./modules/modals";
import tabs from "./modules/tabs";
import forms from "./modules/forms";
import changeModalState from "./modules/changeModalState";
import timer from "./modules/timer";
import images from "./modules/images";
import calcScrollWidth from "./modules/calcScrollWidth";

window.addEventListener('DOMContentLoaded', () => {
	'use strict';

	const scrollWidth = calcScrollWidth();
	let modalState = {};

	changeModalState(modalState);
	modals(scrollWidth);
	tabs('.glazing_slider ', '.glazing_block', '.glazing_content', 'active');
	tabs('.decoration_slider', '.no_click', '.decoration_content > .row > div', 'after_click');
	tabs('.balcon_icons', '.balcon_icons_img', '.big_img img', 'do_image_more');
	forms(modalState);
	timer('.numbers1 #days', '.numbers1 #hours', '.numbers1 #minutes', '.numbers1 #seconds', '.numbers1 .description1', '.numbers1 .description2', '.numbers1 .description3', '.numbers1 .description4', '2022-01-01');
	images(scrollWidth);
});
