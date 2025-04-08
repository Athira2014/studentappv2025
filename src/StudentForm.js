//1. Import Statements
import React, { useState } from "react";

//2.component Definition
function StudentForm() {

    //3. State Management
    // 3.a - FormData state 
    const [formData, setFormData] = useState({
        name: '',
        std: '',
        age: '',
        gender: '',
        location: ''
    });

    const [errors, setErrors] = useState({
        name: '',
        std: '',
        age: '',
        gender: '',
        location: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    //4. Event Handler
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        if (errors[name]) {
            setErrors({ ...errors, [name]: '' })
        }
    };

    //5. Form Validation
    const validateForm = () => {
        let isValid = true;
        const newErrors = { ...errors };

        // name validation
        if (!formData.name) {
            newErrors.name = 'Name field should not be empty.'
            isValid = false;
        }

        // Age validation
        if (!formData.age) {
            newErrors.age = 'Age field should not be empty.'
            isValid = false;
        }

        // Standard validation
        if (!formData.std) {
            newErrors.std = 'Std field should not be empty.'
            isValid = false;
        }

        //Location
        if (!formData.location) {
            newErrors.location = 'Location field should not be empty.'
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    }

    //6.Handle Submission / Add Student
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm) {
            setIsSubmitting(true);
            setTimeout(() => { // simulates API Call
                console.log('Form Submitted', formData);
                alert('Student Added succesfully');
                setIsSubmitting(false);
            }, 1000);
        }
    };

    const deleteStudent = () => {
        setFormData({
            name: '',
            age: '',
            std: '',
            gender: '',
            location: ''
        });
        alert('Student deleted succesfully')
    };

    const editForm = (key, newValue) => {
        if (window.confirm("Are you sure you want to edit the student's " + key + "?")) {
            if (key in formData && validateForm()) {
                setFormData({ ...formData, [key]: newValue });
            } else {
                alert("Invalid Parameter!");
            }
        }
    }

    return (
        <div className="container mt-3">
            <form onSubmit={handleSubmit}>
                <div className="row mb-2">
                    <label className="form-label" htmlFor="name">Name</label>
                    <input
                        className="form-control"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                </div>
                <div className="row mb-2">
                    <label className="form-label" htmlFor="age">Age</label>
                    <input
                        className="form-control"
                        type="text"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                    />
                    {errors.age && <div className="invalid-feedback">{errors.age}</div>}
                </div>
                <div className="row mb-2">
                    <label className="form-label" htmlFor="std">Std</label>
                    <input
                        className="form-control"
                        type="text"
                        name="std"
                        value={formData.std}
                        onChange={handleChange}
                    />
                    {errors.std && <div className="invalid-feedback">{errors.std}</div>}
                </div>
                <div className="row mb-2">
                    <label className="form-label" htmlFor="gender">Gender</label>
                    <input
                        className="form-control"
                        type="text"
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                    />
                    {errors.gender && <div className="invalid-feedback">{errors.gender}</div>}
                </div>
                <div className="row mb-2">
                    <label className="form-label" htmlFor="location">Location</label>
                    <input
                        className="form-control"
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                    />
                    {errors.location && <div className="invalid-feedback">{errors.location}</div>}
                </div>
                <div>
                    <button className="btn btn-primary" disabled={isSubmitting}>
                        {isSubmitting ? 'submitting' : 'Add Student'}
                    </button>
                    <button className="btn btn-danger ms-5" onClick={deleteStudent}>Delete Student</button>
                </div>
            </form>
        </div>
    );

}

export default StudentForm;