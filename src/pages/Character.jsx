import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import '../style/pages.scss';
import arrow from '../assets/img/arrow_back_24px.png';
import CharacterInfo from '../components/CharacterInfo';
const Character = () => {
	const { id } = useParams();
	const [characters, setCharacters] = useState([]);
	useEffect(() => {
		const fetchCharacters = async () => {
			try {
				const response = await axios.get('https://rickandmortyapi.com/api/character/' + id);
				setCharacters(response.data);
			} catch (err) {
				console.error(err);
			}
		};
		fetchCharacters();
	}, []);
	return (
		<div className={'Page'}>
			<div className={'Go_back_div'}>
				<Link className={'Go_back'} to={'/'}>
					<img className={'Go_back_img'} width={10} height={10} src={arrow} /> GO BACK
				</Link>
			</div>
			<img className={'pg_img'} src={characters.image} />
			<p className={'text_page'}>{characters.name}</p>
			<p className={'under_line'}>Informations</p>
			<CharacterInfo id={id} />
		</div>
	);
};

export default Character;
