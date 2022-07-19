import Review from '../Profile/Review/Review';
import Setting from '../Profile/Setting/Setting';
import Course from '../Profile/Course/Course';
import EditProfile from '../Profile/Account/EditProfile';
import ForgetPassword from '../Profile/ForgetPassword/ForgetPassword';
const routes_2 =[
    {
        path : '/Course',
        exact : true,
        main : ({history})=> <Course history={history} />
    },
    
{
    path : '/Review',
	exact : true,
	main : ({history})=> <Review history={history} />
}
,
{
    path : '/Setting',
	exact : true,
	main : ({history})=> <Setting history={history} />
},{
    path: '/EditProfile',
    exact: true,
    main: ({history})=> <EditProfile history={history} />
},
{

    path: '/ForgetPassword',
    exact : true,
    main : ({history})=> <ForgetPassword history={history} />   
}


]
export default routes_2;