const userData = {
  firstName: "Nika",
  lastName: "giguashvili",
  title: "student",
};

function User() {
  return (
    <div id="user" data-testid="user">
      <h1>
        {userData.firstName} {userData.lastName}
      </h1>
      <p>{userData.title}</p>
    </div>
  );
}
