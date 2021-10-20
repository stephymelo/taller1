import * as React from 'react';


interface FestivalFormProps {
    onCreate: (newFestival: {
        title: string,
        season: string,
        award: string,
         }) => void;

}



const FestivalForm: React.FC<FestivalFormProps> = ({ onCreate }) => {
    const [formSubmitted, setFormSubmitted] = React.useState(false);



    const [season, setSeason] = React.useState('');
    const handleSeasonChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setSeason(event.target.value);
    }
    const [award, setAward] = React.useState('');
    const handleNameChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setAward(event.target.value);
    }

    const isSeasonValid = season.length >= 5

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event: any) => {
        event.preventDefault();
        setFormSubmitted(true);
        if (isSeasonValid) {
            console.log('valid');


            onCreate({
                season:season,
                award:award,
                

            });
        } else {
            console.log('invalid');
        }
        
    }

    return(<div>
        <form className="producerForm" onSubmit={handleSubmit}>

        </form>
    </div>);
}

export default FestivalForm;