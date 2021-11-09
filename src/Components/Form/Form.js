import React from 'react'
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

import { useDispatch } from 'react-redux'

import styled from 'styled-components'


export default function Form() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const history = useHistory();
    // const [person, setPerson] = useState({})


    const dispatch = useDispatch();

    const onSubmit = data => {
        dispatch({
            type: 'ADDPERSON',
            payload: data
        })
        history.push("/Home")
    }

    return (
        <>
            <H1 className="title-form">Entrez les informations d'une personne </H1>
            
            {/* <pre>{JSON.stringify(person, undefined, 2)}</pre> */}
            <ContainerForm onSubmit={handleSubmit(onSubmit)} action="" >
                <Label htmlFor="lastName">Nom</Label>
                <Input 
                type="text"  
                placeholder="Enter the last name"
                {...register("lastName",{
                    required: "Last name is required",
                    minLength: {
                      value: 3,
                      message: "The first name must be more than 3 characters",
                    },
                    maxLength: {
                      value: 30,
                      message: "The first name cannot exceed more than 10 characters",
                    },
                  })}
                />
                <Span>{errors.lastName?.message }</Span>
                
                <Label htmlFor="firstName">Prénom</Label>
                <Input 
                type="text" 
                placeholder="Enter your first name"
                {...register("firstName", {
                    required: "First name is required",
                    minLength: {
                      value: 3,
                      message: "The first name must be more than 3 characters",
                    },
                    maxLength: {
                      value: 30,
                      message: "The first name cannot exceed more than 10 characters",
                    },
                  })}
                />

                <Span>{errors.firstName?.message}</Span>

                <Label htmlFor="email">Email</Label>
                <Input 
                type="email" 
                placeholder="Enter your email"
                {...register("email",{
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "This is not a valid email",
                    },
                  })}
                />
                <Span>{errors.email?.message}</Span>


                <Label htmlFor="phone">Telephone</Label>
                <Input 
                type="number" 
                
                placeholder="Enter your phone number"
                {...register("phone",{ })}
                />
           
                <ButtonForm>Soumettre</ButtonForm>
            </ContainerForm>
        </>
    )
}


const ButtonForm = styled.button`
    padding: 10px 15px;
    width: 200px;
    background: transparent;
    border: 1px solid rgba(0,0,0,0.8);
    border-radius: 3px;
    cursor: pointer;
    margin-top: 1em;
`;

const H1 = styled.h1`
  text-align: center;
  font-size: 55px;
  margin: 70px 0 0px
`;

const ContainerForm = styled.form`
    padding: 10px;
    max-width: 900px;
    margin: 30px auto 0;
    display: flex;
    flex-direction: column;
`;

const Label = styled.label`
    font-size: 20px;
`;

const Input = styled.input`
    padding: 10px;
    margin-bottom: 10px;
    font-size: 18px;
`;

const Span = styled.span`
   color: red
`;

