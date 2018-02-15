const user = {
    name : 'Sonja',
    age : 31,
    location : "Montreal"
};
function getLocation(location) {
  if (location){
      return <p>Location: {location}</p>;
  } // else it returns undefined - will not be shown
} 
const templateTwo = (
    <div>
        <h1>{user.name ? user.name : "Anonymous"}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);