import * as React from 'react';
import { ProducerElemProps } from '../Producer/ProducerElem';
import './ProducerForm.css';

interface ProducerElemFormProps {
    onCreate: (newProducer: {
        id: number,
        firstname: string,
        lastname: string,
        role: string,
        profileimg: string,
        backgroundimg: string
    }) => void;

}

const ProducerForm: React.FC<ProducerElemFormProps> = ({ onCreate }) => {


    const [formSubmitted, setFormSubmitted] = React.useState(false);



    const [firstname, setFirstName] = React.useState('');
    const handleFirstNameChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setFirstName(event.target.value);
    }

    const [lastname, setLastName] = React.useState('');
    const handleLastNameChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setLastName(event.target.value);
    }


    const [role, setRole] = React.useState('');
    const handleRoleChange: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
        setRole(event.target.value);
    }



    const [profileimg, setProfileimg] = React.useState('');
    const handleProfileChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        console.log(event);
        setProfileimg(event.target.value);

    }

    const [backgroundimg, setBackgroundimg] = React.useState('');
    const handleBackgroundimg: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setBackgroundimg(event.target.value);
    }



    const isNameValid = firstname.length >= 5



    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event: any) => {
        event.preventDefault();
        setFormSubmitted(true);
        if (isNameValid) {
            console.log('valid');


            onCreate({
                id: Math.random(),
                firstname: firstname,
                lastname: lastname,
                role: role,
                profileimg: profileimg,
                backgroundimg: backgroundimg


            });
        } else {
            console.log('invalid');
        }
    }






    return (

        <form className="producerForm" onSubmit={handleSubmit}>
            <h2>Create profile</h2>
            <div className="nameDiv">
                <div className="nameDiv__1">
                    <label>First name</label>
                    <input type="text"
                        onChange={handleFirstNameChange}
                        value={firstname} />
                    {(formSubmitted && !isNameValid) &&
                        <p className="ProducerFormElem__error">Name must be at least 5 characters long</p>
                    }
                </div>

                <div className="nameDiv__2">
                    <label>Last name</label>
                    <input type="text"
                        onChange={handleLastNameChange}
                        value={lastname} />
                </div>
            </div>

            <label>Role</label>

            <select value={role} onChange={handleRoleChange}>
                <option value=""></option>
                <option value="director">Director</option>
                <option value="producer">Producer</option>
                <option value="screenwriter">Screenwriter</option>
            </select>

            <label>Add profile</label>
            <input type="text"
                onChange={handleProfileChange}
                value={profileimg} />


            <label>Add background cover</label>
            <input type="text"
                onChange={handleBackgroundimg}
                value={backgroundimg} />



            <button>
                Create
            </button>





        </form>);
}



export default ProducerForm;

function setIsSelected(arg0: boolean) {
    throw new Error('Function not implemented.');
}
