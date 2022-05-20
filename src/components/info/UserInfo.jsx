export function UserInfo({ user }) {
  const { name, age, haircolor, hobbies } = user;

  return (
    <>
      <h3>{name}</h3>
      <p>Age: {age} years</p>
      <p>Hair Color: {haircolor}</p>
      <h3>Hobbies</h3>
      <ul>
        {hobbies.map((hobby) => (
          <li key={hobby}>{hobby}</li>
        ))}
      </ul>
    </>
  );
}
