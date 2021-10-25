import * as React from 'react';
import { useHistory } from 'react-router';
import { FestivalElemObj } from '../../Types/FestivalElemObj';

interface FestivalFormProps {
    onCreate: (newFestivalElem: FestivalElemObj) => void;

}



const FestivalForm: React.FC<FestivalFormProps> = ({ onCreate }) => {
    const history = useHistory();

    const [title, setTitle] = React.useState('');
    const handleTitleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setTitle(event.target.value);
    }

    const [season, setSeason] = React.useState('');
    const handleSeasonChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
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

        onCreate(newFestivalElem);
        history.goBack();



    }

    return (<div>
        <form className="producerForm" onSubmit={handleSubmit}>
            <input
                type="text"
                onChange={handleTitleChange}
                value={title}
            />
            <input
                type="text"
                onChange={handleSeasonChange}
                value={title}
            />
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