import {useForm, useFormContext} from "react-hook-form";

const { ref, ...fields } = register('cardImage');
const inputRef = React.useRef(); // your ref to call click() imperatively

const ImageInput = () => {
    const { register } = useForm();
    console.log('register', register);
    const { ref, ...fields } = register('cardImage');
    const inputRef = React.useRef();

    return (
        <>
            <input
                type="file"
                accept=".jpg,.png,.jpeg"
                style={{ display: 'none' }}
                {...fields}
                ref={(instance) => {
                    ref(instance); // RHF wants a reference to this input
                    inputRef.current = instance; // We also need it to manipulate the elemnent
                }}
            />

        </>
    );
};

export default ImageInput