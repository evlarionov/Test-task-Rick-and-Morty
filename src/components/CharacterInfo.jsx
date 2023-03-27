import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
const CharacterInfo = ({ id }) => {
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
		<div className={'LineBase'}>
			<div className={'LineBase_line'}>
				<h4 className={'text_Line'}>Gender</h4>
				<p className={'text_Line2'}>{characters.gender}</p>
			</div>
			<div className={'LineBase_line'}>
				<h4 className={'text_Line'}>Status</h4>
				<p className={'text_Line2'}>{characters.status}</p>
			</div>
			<div className={'LineBase_line'}>
				<h4 className={'text_Line'}>Specie</h4>
				<p className={'text_Line2'}>{characters.species}</p>
			</div>
			<div className={'LineBase_line'}>
				<h4 className={'text_Line'}>Origin</h4>
				<p className={'text_Line2'}>{characters.origin && characters.origin.name}</p>
			</div>
			<div className={'LineBase_line'}>
				<h4 className={'text_Line'}>Type</h4>
				<p className={'text_Line2'}>{characters.type || 'Unknown'}</p>
			</div>
		</div>
	);
};

export default CharacterInfo;
