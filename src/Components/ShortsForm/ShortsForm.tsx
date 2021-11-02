import * as React from 'react';
import { ShortsElemProps } from '../Shorts/ShortsElem';
import { useHistory } from 'react-router';

import './ShortsForm.css';
import { ProducerElemProps } from '../Producer/ProducerElem';

interface ShortElemFormProps {
    editId: number | null;
    type: 'create' | 'edit';
    onCreate: (newShort: { title: string, genre: string, year: number, description: string, coverimg: string, producerName: string | undefined, producerID: string | undefined }) => void;
    onEdit: (id: number, editMusicElem: { title: string }) => void;
    producerElems: ProducerElemProps[];
}

const ShortsForm: React.FC<ShortElemFormProps> = ({ editId, type, onCreate, onEdit, producerElems }) => {
    const history = useHistory();



    const [formSubmitted, setFormSubmitted] = React.useState(false);



    const [title, setTitle] = React.useState('');
    const handleTitleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setTitle(event.target.value);
    }

    const [genre, setGenre] = React.useState('');
    const handleGenreChange: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
        setGenre(event.target.value);
    }

    const [coverimg, setCoverimg] = React.useState('');
    const handleCoverimg: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setCoverimg(event.target.value);
    }


    const [year, setYear] = React.useState(0);
    const handleYearChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setYear(Number.parseInt(event.target.value));
    }

    const [description, setDescription] = React.useState('');
    const handleDescriptionChange: React.ChangeEventHandler<HTMLTextAreaElement> = (event) => {
        setDescription(event.target.value);
    }

    const [producer, setProducer] = React.useState({ producerName: "", producerID: "" });
    const handleProducer: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
        setProducer({ producerName: event.target.innerText, producerID: event.target.value });
        console.log(producer)
    }






    


    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event: any) => {
        event.preventDefault();
        setFormSubmitted(true);
        if (type === 'create') {
            console.log('valid');

            console.log({ producer });

            onCreate({
                title: title,
                genre: genre,
                year: year,
                coverimg: "string",
                description: description,
                producerID: producer.producerID,
                producerName: producer.producerName
            });
            history.push('/shortfilms');

        } else if (type === 'edit' ) {
            onEdit(editId!, { title: title });
        } else {
            console.log('invalid');
        }
    }



    const date = new Date();



    return (

        <form className="shortsForm" onSubmit={handleSubmit}>




            <h2>{type === 'create' ? 'New' : 'Edit'} Shortfilm {editId}</h2>


            {type === 'create' && <><label>Title</label><input type="text"
                onChange={handleTitleChange}
                value={title} /></>

            }

            <div className="inputDiv">

                <div className="inputDiv__1">
                    <label>Year</label>
                    <input type="number" min={1900} max={date.getFullYear()}
                        onChange={handleYearChange}
                        value={year} />
                </div>
                <div className="inputDiv__2">
                    <label>Genre</label>
                    <select value={genre} onChange={handleGenreChange}>
                        <option value="comedy">Comedy</option>
                        <option value="drama">Drama</option>
                        <option value="suspense">Suspense</option>
                        <option value="romance">Romance</option>
                    </select>
                </div>
            </div>

            <label>Description</label>
            <textarea className="descripInput" rows={4} cols={50}
                onChange={handleDescriptionChange}
                value={description} />

            <label>Add cover image</label>
            <input multiple accept=".jpg,.png,.webp,.jfif" name="file" type="file" alt="bg"
                onChange={handleCoverimg}
                value={coverimg} />

            <label>Add Producer</label>
            <select name="producers" onChange={handleProducer}>
                <option value="none">Select option</option>
                {
                    producerElems.map(producer => {
                        return <option value={producer.id} className={producer.firstname}>{producer.firstname}</option>
                    })
                }
            </select>

            <button>
                {type === 'create' ? 'Create new Shortfilm' : 'Save changes'}
            </button>
        </form>);
}



export default ShortsForm;


