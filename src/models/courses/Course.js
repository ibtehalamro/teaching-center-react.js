import * as Yup from 'yup';

class Course {
    id = 0;
    name;
    type;
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
    setId(id) { this.id = id; }
    setName(name) { this.name = name; }
    setType(type) { this.type = type; }

    getId() { return this.id; }
    getName() { return this.name; }
    getType() { return this.type; }


    static getValidationSchema() {
        return Yup.object().shape({
            name: Yup.string()
                .required('Course name is required')
                .matches(/^[a-zA-Z\s]*$/, 'Course name must contain only letters.')
                .typeError('Course name must be a string'),
            type: Yup.string()
                .required('Major name is required')
                .matches(/^[a-zA-Z\s]*$/, 'Type name must contain only letters.')
                .typeError('Major name must be a string'),
        });
    }
}
export default Course;
