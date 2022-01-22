import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import {carService} from "../../services/car.service";
import {CarValidator} from "../../validators/car.validators";
import {useState} from "react";


const Form = ({update}) => {

    const [formError, setFormError] = useState({})
    const {
        register, handleSubmit
    } = useForm({resolver:joiResolver(CarValidator), mode:"onTouched"});

    const submit = async (car) => {
        try {
            const newCar = await carService.create(car);
           update(newCar)
        } catch (error) {
            setFormError(error.responce.data)
        }
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