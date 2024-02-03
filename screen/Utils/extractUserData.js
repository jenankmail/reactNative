import user from '../../assets/dummy-data/Users';
export default  extractUserData =(id)=>{
const userData=user.filter((item)=>item.id);
return userData;
}