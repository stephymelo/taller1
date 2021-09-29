import * as React from 'react';
import { ShortsElemProps } from '../Shorts/ShortsElem';
import './ShortsForm.css';

interface ShortElemFormProps {
    onCreate: (newShort: ShortsElemProps) => void;

}

const ProducerForm: React.FC<ShortElemFormProps> = ({ onCreate }) => {


    const [formSubmitted, setFormSubmitted] = React.useState(false);



    const [title, setTitle] = React.useState('');
    const handleTitleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setTitle(event.target.value);
    }

    
    const [year, setYear] = React.useState('');
    const handleYearChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setYear(event.target.value);
    }
   
    const [description, setDescription] = React.useState('');
    const handleDescriptionChange: React.ChangeEventHandler<HTMLInputElement> = (event) =>{
        setDescription(event.target.value);
    }



    


    const isNameValid = true;
    


    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event: any) => {
        event.preventDefault();
        setFormSubmitted(true);
        if (isNameValid) {
            console.log('valid');


            onCreate({
                title: title,
                year: year,
                description:description

            });
        } else {
            console.log('invalid');
        }
    }






    return (

        <form className="producerForm" onSubmit={handleSubmit}>
            <h2>Create profile</h2>
            <label>Title</label>
            <input type="text"
                onChange={handleTitleChange}
                value={title} />
           


            <label>Year</label>
            <input type="text"
                onChange={handleYearChange}
                value={year} />
            
            <label>Description</label>
            <input type="text"
                onChange={handleDescriptionChange}
                value={description} />

          



            <button>
                Add
            </button>





        </form>);
}



export default ProducerForm;


