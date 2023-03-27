import { useEffect, useState } from 'react';
import axios from 'axios';
import Box from '../components/Box';
import logo from '../assets/img/logo.png';
import SearchBar from '../components/SearchBar';
import Auth from './Auth';
const Home = () => {
	const [isLogged, setIsLogged] = useState(localStorage.getItem('isLogged') || false);

	const [characters, setCharacters] = useState([]);

	const [search, setSearch] = useState(localStorage.getItem('search') || '');

	useEffect(() => {
		const fetchCharacters = async () => {
			try {
				const response = await axios.get('https://rickandmortyapi.com/api/character');
				setCharacters(response.data.results);
			} catch (err) {
				console.error(err);
			}
		};
		fetchCharacters();
	}, []);
	useEffect(() => {
		localStorage.setItem('isLogged', isLogged);
	}, [isLogged]);
	useEffect(() => {
		localStorage.setItem('search', search);
	}, [search]);
	const compareNames = (a, b) => {
		return a.name < b.name ? -1 : 1 || 0;
	};
	const sortedCharacters = characters.sort(compareNames).filter((character) => {
		if (search) {
			return character.name.toLowerCase().includes(search.toLocaleLowerCase());
		}
		return true;
	});
	const handleSearchChange = (e) => {
		setSearch(e.target.value);
	};
	if (isLogged) {
		return (
			<div className={'Main'}>
				<img className={`logo`} src={logo} />
				<SearchBar onSearchChange={handleSearchChange} initialValue={search} />
				<div className={'Box_div'}>
					{sortedCharacters.map((character) => (
						<Box
							key={character.id}
							id={character.id}
							image={character['image']}
							name={character.name}
							description={character.species}
						/>
					))}
				</div>
			</div>
		);
	} else {
		return (
			<div className={'Main'}>
				<img className={`logo`} src={logo} />
				<h1>Please Log In</h1>
				<Auth setIsLogged={setIsLogged} />
			</div>
		);
	}
};

export default Home;
