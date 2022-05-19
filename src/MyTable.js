import React from 'react';
import MaterialTable from 'material-table';
import { data } from './data';

export default function MyTable() {
  return (
    <div style={{ maxWidth: '100%' }}>
      <MaterialTable
        columns={
          [
            { title: 'Id', field: 'id' },
            { title: 'First Name', field: 'first_name' },
            { title: 'Last Name', field: 'last_name' },
            { title: 'Email', field: 'email' },
            { title: 'Gender', field: 'gender' },
            { title: 'Country', field: 'county' }
          ]
        }
        data={data}
    
        title="Customer Data"
        options={{  
          headerStyle: { 
            background: 'olive',
          },
          rowStyle: { 
            background: 'lightgrey',
          }
        }
        }
        localization={{
          pagination: {
            nextAriaLabel: '>',
            previousAriaLabel: '<'
          } 
        }}
      />      
    </div>
  );
}
