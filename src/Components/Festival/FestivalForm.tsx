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
    const handleAwardChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
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

        console.log({newFestivalElem})
        onCreateFestival(shortElemId,newFestivalElem);
        //history.goBack();



    }

    return (<div>
        <form className="festivalForm" onSubmit={handleSubmit}>
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
            
            <input
                type="text"
                onChange={handleAwardChange}
                value={title}
            />
            <button>
                Add festival
            </button>

        </form>
    </div>);
}

export default FestivalForm;