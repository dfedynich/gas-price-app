import React from 'react';
import AppLayout from './layouts/AppLayout';


import Home from './screens/Home';
import Card from './components/Card';
import PropTypes from "prop-types";

// const App = () => {
//     return (
//         <AppLayout>
//             <Card
//                 id={1}
//                 title="Test"
//                 heroTitle="12.6 miles"
//                 address="9320 Mira Mesa Blvd"
//                 listItems={[{
//                     name: 'Name1',
//                     value: 'Value1'
//                 },{
//                     name: 'Name1',
//                     value: 'Value1'
//                 },{
//                     name: 'Name1',
//                     value: 'Value1'
//                 },{
//                     name: 'Name1',
//                     value: 'Value1'
//                 }]}
//             />
//         </AppLayout>
//     );
// };

const App = () => {
    return (
        <AppLayout>
            <Home />
        </AppLayout>
    )
};

export default App;