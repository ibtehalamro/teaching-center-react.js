import * as Yup from 'yup';
class AddressManager {
    constructor(street, city) {
        this.street = street;
        this.city = city;
    }

    setStreet(street) {
        this.street = street;
    }

    setCity(city) {
        this.city = city;
    }

    getStreet() {
        return this.street;
    }

    getCity() {
        return this.city;
    }

    getAddress() {
        return `${this.street}, ${this.city}`;
    }

    static getValidationSchema() {
        return Yup.object().shape({
            address: Yup.object().shape({
                street: Yup.string()
                    .matches(/^[a-zA-Z\s]*$/, 'Street name must contain only letters.')
                    .typeError('Street name must be a string'),
                city: Yup.string()
                    .matches(/^[a-zA-Z\s]*$/, 'City name must contain only letters.')
                    .required('City is required').typeError('City name must be a string')
            })
        });
    }
}
export default AddressManager;