import React from "react";
import noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';

function Slider() {
	var slider = document.getElementById('slider');
	if (slider) {
		return (
			noUiSlider.create(slider, {
				start: [20, 80],
				connect: true,
				range: {
					'min': 0,
					'max': 100
				}
			})
		)
	}



}
export default Slider;
