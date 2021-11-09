import { useSelector, useDispatch } from 'react-redux'
import Item from '../../Components/Item/Item'
import { useHistory } from "react-router-dom";
import {v4 as uuidv4} from 'uuid'
import styled from 'styled-components'


export default function Home(props) {
    const history = useHistory();

    const {people} = useSelector(state => ({
        ...state.peopleReducer
    }))

    const dispatch = useDispatch()

    function dropPeople(){
        dispatch({
            type: 'DROPPEOPLE',
            payload: []
        })
        history.push("/");
    }

    function addAnotherPerson(){
        history.push("/");
    }

    return (
        <div className="container">
            <H1>Liste des personnes enregistrées : </H1>
            <Table>
                <tbody>
                <tr>
                    <th scope="col">N</th>
                    <th scope="col">Nom</th>
                    <th scope="col">Prénom</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone</th>
                </tr>
                    {people.map((item, index)=> {
                        return(
                            <Item 
                                key={uuidv4()}
                                number={index}
                                lastName={item.lastName}
                                firstName={item.firstName}
                                email={item.email}
                                phone={item.phone}
                            />
                        )
                    })}
                </tbody>
            </Table>
            <ButtonsContainer>
                <Button onClick={dropPeople}>Erase</Button>
                <Button onClick={addAnotherPerson}>Ajouter un autre utilisateur</Button>
            </ButtonsContainer>
            


        </div>
    )
}
const Button = styled.button`
  color: black;
  border: 2px solid black;
  border-radius: 3px;

  padding: 10px 15px;
  margin: 5px 5px;
  width: 200px;
  background: transparent;
  border: 1px solid rgba(0,0,0,0.8);
  border-radius: 3px;
  background-color: white;
  cursor: pointer;
`;
const H1 = styled.h1`
  text-align: center;
  font-size: 55px;
  margin: 70px 0 0px
`;

const Table = styled.table`
    margin: 50px auto;
`;

const ButtonsContainer = styled.div`
  text-align: center;
  list-style-type: none;
`;

