import {useForm} from "react-hook-form";
import {useState} from "react";
import {carService} from "../../services/car.service";

const Form = () => {
    const [formError, setFormError] = useState({});

    const {
        register, handleSubmit, formState:{errors}
    } = useForm();

    const submit = (car) => {
        carService.create(car).then(value => console.log(value)).catch(error =>{
            setFormError(error.response.data)
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <div><label>MODEL: <input type="text" defaultValue={''} {...register('model')}/></label></div>
                {formError.model && <span>{formError.model[0]}</span>}
                <div><label>PRICE: <input type="text" defaultValue={''} {...register('price')}/></label></div>
                {formError.price && <span>{formError.price[0]}</span>}
                <div><label>YEAR: <input type="text" defaultValue={''} {...register('year')}/></label></div>
                {formError.year && <span>{formError.year[0]}</span>}
                <button>SAVE</button>
            </form>
        </div>
    );
};

export default Form;