import React from 'react';
import EditProfile from '../Profile/Account/EditProfile';
import ForgetPassword from '../Profile/ForgetPassword/ForgetPassword';
const routes_3 = [{

        path: '/EditProfile',
        exact : true,
        main : ({history})=> <EditProfile history={history} />   
},
{

    path: '/ForgetPassword',
    exact : true,
    main : ({history})=> <ForgetPassword history={history} />   
}]
export default routes_3;