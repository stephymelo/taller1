import * as React from 'react';
import { ProducerElemProps } from '../Producer/ProducerElem';
import './ProducerForm.css';

interface ProfucerElemFormProps {
    onCreate: (newProducer: {name: string,
        role: string,
        profileimg: string,
        backgroundimg: string}) => void;

}

const ProducerForm: React.FC<ProfucerElemFormProps> = ({ onCreate }) => {


    const [formSubmitted, setFormSubmitted] = React.useState(false);



    const [name, setName] = React.useState('');
    const handleNameChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setName(event.target.value);
    }

    const [role, setRole] = React.useState('');
    const handleRoleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setRole(event.target.value);
    }



    const [profileimg, setProfileimg] = React.useState('');
    const handleProfileChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {

        ///////////////////
        // if (e.target.input.files.length) {
        //     const upload_file = e.target.input.files[0];
        //     const formData = new FormData();
        //     formData.append('file', upload_file);

       
        /////////////////////
        console.log(event);
        setProfileimg(event.target.value);
  
    }

    const [backgroundimg, setBackgroundimg] = React.useState('');
    const handleBackgroundimg: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setBackgroundimg(event.target.value);
    }

    // const [selectedFile, setSelectedFile] = React.useState();
    // const handleBackgroundimg: React.ChangeEventHandler<HTMLInputElement> = (event) =>  {
	// 	setSelectedFile(event.target.files[0]);
	// 	setIsSelected(true);
	// };



    const isNameValid = name.length >= 5
    


    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event: any) => {
        event.preventDefault();
        setFormSubmitted(true);
        if (isNameValid) {
            console.log('valid');


            onCreate({
                name: name,
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
            <label>Name</label>
            <input type="text"
                onChange={handleNameChange}
                value={name} />
            {(formSubmitted && !isNameValid) &&
                <p className="ProducerFormElem__error">Name must be at least 5 characters long</p>
            }


            <label>Role</label>
            <input type="text"
                onChange={handleRoleChange}
                value={role} />

            <label>Add profile</label>
            <input multiple accept=".jpg,.png,.webp,.jfif" name="file" type="file"alt="profile"
                onChange={handleProfileChange}
                value={profileimg} />


            <label>Add background cover</label>
            <input multiple accept=".jpg,.png,.webp,.jfif" name="file" type="file" alt="bg"
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
