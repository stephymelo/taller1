import * as React from 'react';
import { useHistory } from 'react-router';
import { FestivalElemObj } from '../../Types/FestivalElemObj';

interface FestivalFormProps {
    onCreateFestival: (shortElemId: number, newFestivalElem: FestivalElemObj) => void;
    shortElemId: number;
}



const FestivalForm: React.FC<FestivalFormProps> = ({ onCreateFestival, shortElemId }) => {
    const history = useHistory();

    const [title, setTitle] = React.useState('');
    const handleTitleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setTitle(event.target.value);
    }

    const [season, setSeason] = React.useState('');
    const handleSeasonChange: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
        setSeason(event.target.value);
    }
    const [award, setAward] = React.useState('');
    const handleAwardChange: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
        setAward(event.target.value);
    }

    const isSeasonValid = season.length >= 5



    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();


        const newFestivalElem: FestivalElemObj = {
            id: Math.random(),
            title: title,
            season: season,
            award: award,

        }

        console.log({ newFestivalElem })
        onCreateFestival(shortElemId, newFestivalElem);
        //history.goBack();



    }

    return (<div>
        <form className="festivalForm" onSubmit={handleSubmit}>
            <h2>Add a festival</h2>
            <label>Festival Title</label>
            <input
                type="text"
                onChange={handleTitleChange}
                value={title}
            />

            <label>Season</label>

            <select value={season} onChange={handleSeasonChange}>
                <option value="winter">Winter</option>
                <option value="spring">Spring</option>
                <option value="summer">Summer</option>
                <option value="fall">Fall</option>
            </select>

            <label>Award</label>
            <select value={award} onChange={handleAwardChange}>
                <option value="Best Film">Best Film</option>
                <option value="Best Director">Best Director</option>
                <option value="Best Soundtrack">Best Soundtrack</option>
                <option value="Best Cinematography">Best Cinematography</option>
                <option value="Best Costume Design">Best Costume Design</option>
                <option value="Best Sound Design">Best Sound Design</option>
                <option value="Best Original Song">Best Original Song</option>
                <option value="Best Actriz">Best Actriz</option>
                <option value="Best Suppoting Actriz">Best Suppoting Actriz</option>
                <option value="Best Adaptive Screenplay">Best Adaptive Screenplay</option>
                <option value="Best Animation Short">Best Animation Short</option>
                <option value="Best Special Effects">Best Special Effects</option>
                <option value="Best Documentary Short">Best Documentary Short</option>
                <option value="Best Film Editing">Best Film Editing</option>
                <option value="Best Production Design">Best Production Design</option>
                <option value="Best Makeup and Hair">Best Makeup and Hair</option>
                <option value="Best Sound Editing">Best Sound Editing</option>
                <option value="Best Artistic Value">Best Artistic Value</option>
                <option value="Best Supporting Director">Best Supporting Director</option>
                
                

            </select>
            {/* <input
                type="text"
                onChange={handleAwardChange}
                value={title}
            /> */}
            <button>
                Add festival
            </button>

        </form>
    </div>);
}

export default FestivalForm;