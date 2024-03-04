import React, { useState } from 'react';
import { BsCamera2 } from "react-icons/bs";

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
    <input type="text" {...props} className='border border-gray-300 rounded px-4 py-2 mt-2' />
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
            <label htmlFor="media" className='bg-slate-200 min-h-[94svh] min-w-[50svw] flex flex-col items-center justify-center rounded-lg'>
                {!media && <BsCamera2 className='bg-[#fff] w-[100px] h-[100px] rounded-full p-5 hover:p-2 cursor-pointer transition-all' />}
                {media && (
                    <div className='m-4 flex flex-col items-center justify-center'>
                        {media.type.includes('image') ? (
                            <img src={URL.createObjectURL(media)} alt="Uploaded Image" className='min-w-[400px] min-h-[400px] max-w-[40svw] max-h-[80svh]' />
                        ) : (
                            <video className='min-w-[400px] min-h-[400px] max-w-[40svw] max-h-[80svh]' controls>
                                <source src={URL.createObjectURL(media)} type={media.type} />
                            </video>
                        )}
                        <button className='bg-blue-500 text-white px-4 py-2 mt-2 rounded' onClick={() => setMedia(null)}>Change Media</button>
                    </div>
                )}
            </label>
            <form onSubmit={handleSubmit} className='m-4 flex flex-col text-white font-semibold'>
                <h1 className='text-center text-3xl font-bold text-blue-200'>Report Issue</h1>
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
                <fieldset className='mt-4 border border-white rounded-lg'>
                    <legend className='text-xl px-2 text-center'>Category</legend>
                    <div className='grid grid-cols-3 w-max'>
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
                    <legend className='text-xl px-2'>Visibility</legend>
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
                <button type="submit" className='bg-blue-500 text-white px-4 py-2 mt-4 rounded'>Submit</button>
            </form>
        </>
    );  
}
export default IssueForm;