import {carService} from "../../services/car.service";

const Car = ({car, update}) => {
    const {id, model, price, year} = car;

    const deleteCar = async () => {
        await carService.deleteById(id);
        update({})
    }
    return (
        <div>
            <div>ID: {id}</div>
            <div>MODEL: {model}</div>
            <div>PRICE: {price}</div>
            <div>YEAR: {year}</div>
            <button onClick={() => deleteCar()}>DELETE</button>
            <hr/>
        </div>
    );
};

export default Car;