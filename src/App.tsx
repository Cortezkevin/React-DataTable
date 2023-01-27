import { DataTable } from "./DataTable/components/DataTable"
import { Column, Row } from "./DataTable/interfaces/interfaces";

const columns: Column[] = [
  {        
    name: 'Username',
    selector: row => row.username,
  },
  {        
    name: 'Email',
    selector: row => row.email,
  },
  {        
    name: 'Password',
    selector: row => row.password,
  },
  {
    name: 'Valid User',
    selector: row => row.isValidUser ? 'Valid' : 'No Valid',
  },
  {
    name: 'Photo',
    selector: row => <img style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: '50%'}} src={row.photoUrl} alt="" />,
  },
  {        
    name: 'Actions',
    selector: row => <>
      <button style={{ padding: '10px', border: 'none', backgroundColor: '#ff9900', cursor: 'pointer'}} onClick={() => alert( row.username )}>Edit</button>
      <button style={{ padding: '10px', border: 'none', backgroundColor: '#e05858', cursor: 'pointer'}} onClick={() => alert( row.username )}>Delete</button>
    </>,
  }
];

const data: Row[] = [
  {
    id: 1,
    username: 'Kevinqwe123',
    email: "kevin@gmail.com",
    password: "asda4654f",
    isValidUser: true,
    photoUrl: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
  },
  {
    id: 2,
    username: 'DulceR4246',
    email: "DulceR4246@gmail.com",
    password: "5D344246asdsa",
    isValidUser: false,
    photoUrl: 'https://thumbs.dreamstime.com/b/surprised-female-person-confused-isolated-surprised-female-person-confused-isolated-168304856.jpg'
},
]


export const App = () => {
  return (
    <div>       
      <DataTable 
        columns={ columns } 
        data={ data }
      />  
    </div>
  )
}
