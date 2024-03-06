import React, { useState } from 'react';
import { BsCamera2 } from "react-icons/bs";
import { TextField } from '@mui/material';
import {blue} from '@mui/material/colors';

const primary = blue[50];

const RadioInput = (props: {
    name: string;
    value: string;
    checked: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    required: boolean;
}) => (
    <label htmlFor={props.value} className='inline-flex items-center m-2'>
        <input type="radio" id={props.value} {...props} className='mr-2' />
        {props.value == 'Miscellaneous' ? 'Misc' : props.value}
    </label>
);
const TextInput = (props: {
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    required: boolean;
    placeholder: string;
}) => (
    <TextField
        id="outlined-basic"
        variant='outlined'
        color='primary'
        label={`${props.placeholder}`}
        className='customTextField border bg-slate-200  rounded px-4 py-2 mt-2 text-black m-auto h-max'
        style={{ height: 45 , textAlign: 'center' ,backgroundColor:'#393E46', borderColor: 'white', color: 'white' }}
        InputProps={{
          style: { height: 45,  textAlign: 'center', color: 'white' , fontSize: '1rem'},
        }}
        InputLabelProps={{
            style: { 
                textAlign: 'center', 
                color: 'white',
                fontSize: '1rem',
            },
        }}
    />
);

const IssueForm = () => {
    const textInput = ['title', 'description', 'location'];
    const visibility = ['public', 'private'];
    const category = ['Electricity', 'Internet', 'Mess', 'Washroom', 'Carpentry', 'Miscellaneous'];
    const [media, setMedia] = useState<File | null>(null);
    type IssueType = { [key: string]: string };
    const [issue, setIssue] = useState<IssueType>({
        title: '',
        description: '',
        category: '',
        visibility: 'public',
        location: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setIssue({ ...issue, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(issue);
    };

    return (
        <>
            <label htmlFor="media" className='bg-[#393E46] min-h-[94svh] min-w-[45svw] flex flex-col items-center justify-center rounded-lg'>
                {!media && <BsCamera2 className='bg-[#00FFF5] w-[100px] h-[100px] rounded-full p-5 hover:p-4 cursor-pointer transition-all shadow-[0_0_30px_#00FFF5] hover:shadow-none' />}
                {media && (
                    <div className='m-4 flex flex-col items-center justify-center'>
                        {media.type.includes('image') ? (
                            <img src={URL.createObjectURL(media)} alt="Uploaded Image" className='max-w-[40svw] max-h-[80svh]' />
                        ) : (
                            <video className='max-w-[40svw] max-h-[80svh]' controls>
                                <source src={URL.createObjectURL(media)} type={media.type} />
                            </video>
                        )}
                        <button className='bg-[#00FFF5] text-slate-700 px-4 py-2 mt-5 rounded bg-gradient-to-r from-[#00FFF5] to-[#00ADB5] text-lg font-bold transition-all shadow-[0_0_10px_#00FFF5] hover:shadow-none' onClick={() => setMedia(null)}>Change Media</button>
                    </div>
                )}
            </label>
            <form onSubmit={handleSubmit} className='m-5 flex flex-col text-white font-semibold basis-[100%] gap-3'>
                <h1 className='text-center text-4xl font-bold text-[#fff]'>Report Issue</h1>
                <hr className='w-3/4 border-white border-1 self-center mb-5' />
                {textInput.map((input) => (
                    <TextInput
                        key={input}
                        name={input}
                        value={issue[input]}
                        onChange={handleChange}
                        required
                        placeholder={input}
                    />
                ))}
                <input
                    id='media'
                    type="file"
                    onChange={(e) => setMedia(e.target.files![0])}
                    required
                    className='hidden'
                />
                <fieldset className='mt-4 border border-[#fff] rounded-lg'>
                    <legend className='text-2xl px-2 text-center text-[white]'>Category</legend>
                    <div className='grid grid-cols-3 w-max m-auto'>
                        {category.map((cat) => (
                            <RadioInput
                                key={cat}
                                name="category"
                                value={cat}
                                checked={issue.category === cat}
                                onChange={handleChange}
                                required
                            />
                        ))}
                    </div>
                </fieldset>
                <div className='mt-4'>
                    <legend className='text-2xl px-2 text-[white]'>Visibility</legend>
                    {visibility.map((vis) => (
                        <RadioInput
                            key={vis}
                            name="visibility"
                            value={vis}
                            checked={issue.visibility === vis}
                            onChange={handleChange}
                            required
                        />
                    ))}
                </div>
                <button type="submit" className='bg-[#00FFF5] text-slate-700 px-4 py-2 mt-4 rounded bg-gradient-to-r from-[#00FFF5] to-[#00ADB5] text-lg font-bold transition-all shadow-[0_0_10px_#00FFF5] hover:shadow-none'>Submit</button>
            </form>
        </>
    );
}
export default IssueForm;