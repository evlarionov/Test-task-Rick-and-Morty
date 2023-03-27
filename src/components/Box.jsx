import React from 'react';
import '../style/ui.scss';
import unknown from '../assets/img/Unknown_person.jpg';
import { Link } from 'react-router-dom';

const Box = ({ id, image, name, description, search }) => {
	if (search && !name.toLowerCase().includes(search.toLowerCase())) {
		return null;
	}
	return (
		<Link to={'/character/' + id} className={'Box_main'}>
			<img className={'Box_img'} src={image || unknown} />
			<h6 className={'Box_text'}>{name}</h6>
			<h6 className={'Box_textdD'}>{description}</h6>
		</Link>
	);
};

export default Box;
